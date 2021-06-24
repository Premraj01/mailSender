/** @format */

import bcrypt from 'bcryptjs'

const admin = [
  {
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    email: 'admin1@example.com',
    password: bcrypt.hashSync('12345678', 10),
  },
]

export default admin
