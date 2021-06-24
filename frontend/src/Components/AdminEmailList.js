/** @format */

import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { RiSendPlaneFill } from 'react-icons/ri'

const AdminEmailList = () => {
  const [emails, setEmails] = useState([])
  const [navigate, setNavigate] = useState(false)

  const adminInfo = JSON.parse(localStorage.getItem('adminInfo'))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`,
          },
        }
        const { data } = await axios.get(`/api/email`, config)
        setEmails(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    if (navigate) {
      return <Redirect to='/' push={true} />
    }

    fetchData()
  }, [adminInfo, navigate])

  const submitHandler = async (email) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminInfo.token}`,
        },
      }
      const { data } = await axios.post(`/api/email/send`, { email }, config)
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <h3>Email List</h3>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>

            <th>EMAIL</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email._id}>
              <td>{email._id}</td>

              <td>
                <a href={`mailto:${email.email}`}>{email.email}</a>
              </td>

              <td>
                <Button
                  variant='success'
                  className='btn-sm'
                  onClick={() => submitHandler(email.email)}>
                  <RiSendPlaneFill />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default AdminEmailList
