/** @format */

import axios from 'axios'

const registerMail = async (email) => {
  try {
    const { data } = await axios.post(`/api/email`, email)
  } catch (error) {}
}

export { registerMail }
