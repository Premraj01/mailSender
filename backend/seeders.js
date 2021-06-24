/** @format */

import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import admins from './data/admin.js'
// import Admin from './models/adminModel.js'
import email from './data/email.js'
import Email from './models/emailModel.js'
import connctDB from './config/db.js'

dotenv.config()

connctDB()

const importData = async () => {
  try {
    await Email.deleteMany()

    await Email.insertMany(email)

    console.log('Data imported')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroytData = async () => {}

if (process.argv[2] === '-d') {
  destroytData()
} else {
  importData()
}
