/** @format */
import asyncHandler from 'express-async-handler'
import Email from '../models/emailModel.js'
import sgMail from '@sendgrid/mail'

//@desc Register user email
//@route POST /api/email
//@access Public

const registerEmail = asyncHandler(async (req, res) => {
  const { email } = req.body
  const emailExists = await Email.findOne({ email })

  console.log('back', email)

  if (emailExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  const registerNewEmail = await Email.create({
    email,
  })
  if (registerNewEmail) {
    res.status(201).json({
      _id: registerEmail._id,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Email...!!')
  }
})

//@desc Get all user email
//@route GET /api/email
//@access private/Admin

const getEmails = asyncHandler(async (req, res) => {
  const emails = await Email.find({})
  res.json(emails)
})

//@desc send email
//@route POST /api/email/send
//@access Private

const sendEmail = asyncHandler(async (req, res) => {
  const { email } = req.body
  sgMail.setApiKey(process.env.SENDGRID_API)

  const msg = {
    to: email,
    from: 'premrajtripute777@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  sgMail
    .send(msg)
    .then((res) => {
      console.log(res[0].statusCode)
      console.log('Email sent..')
      console.log(res[0].headers)
    })
    .catch((e) => {
      console.error(e)
    })
})

export { registerEmail, getEmails, sendEmail }
