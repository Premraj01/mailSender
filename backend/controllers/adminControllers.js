/** @format */
import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
import generateToken from '../utils/generateToken.js'

//@desc Auth admin & get token
//@route POST /api/admin
//@access Public

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const admin = await Admin.findOne({ email })
  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or Password')
  }
})

export { authAdmin }
