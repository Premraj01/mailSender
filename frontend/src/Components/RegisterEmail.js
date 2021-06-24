/** @format */

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Button, Container } from 'react-bootstrap'

const RegisterEmail = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    // const fetchData = async () => {
    //   setMessage(data)
    // }
    // fetchData()
  }, [])

  console.log(message)

  const emailSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(`/api/email`, { email }, config)
      console.log('data', data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <h3 className='mt-5'>Enter the email to Register:</h3>
      <Form onSubmit={emailSubmitHandler}>
        <Form.Control
          type='email'
          name='email'
          placeholder='Enter the Email'
          onChange={(e) => setEmail(e.target.value)}
          className='mr-sm-3 mt-sm-5  ml-sm-3'
          required></Form.Control>
        <Button type='submit' variant='light' className='mt-sm-2'>
          Register
        </Button>
      </Form>
    </Container>
  )
}

export default RegisterEmail
