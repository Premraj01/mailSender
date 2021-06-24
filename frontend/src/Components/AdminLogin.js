/** @format */

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

const AdminLogin = ({ onClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `/api/admin`,
        { email, password },
        config
      )
      localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
      console.log(error.message)
    }
    onClick()
  }

  return (
    <>
      <h3>Admin Login: </h3>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter the Email'
            onChange={(e) => setEmail(e.target.value)}
            required></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter the Password'
            onChange={(e) => setPassword(e.target.value)}
            required></Form.Control>
        </Form.Group>

        <Button className='mt-3' type='submit' variant='primary'>
          Login
        </Button>
      </Form>
    </>
  )
}

export default AdminLogin
