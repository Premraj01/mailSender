/** @format */
import express from 'express'
const router = express.Router()

import { authAdmin } from '../controllers/adminControllers.js'

router.route('/').post(authAdmin)

export default router
