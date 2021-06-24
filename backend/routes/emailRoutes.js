/** @format */
import express from 'express'
const router = express.Router()

import {
  registerEmail,
  getEmails,
  sendEmail,
} from '../controllers/emailControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerEmail).get(protect, getEmails)
router.post('/send', protect, sendEmail)

export default router
