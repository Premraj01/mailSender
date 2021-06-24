/** @format */

import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import AdminLogin from './AdminLogin'
import AdminEmailList from './AdminEmailList'

const Admin = () => {
  const [admin, setAdmin] = useState(false)

  const adminInfo = JSON.parse(localStorage.getItem('adminInfo'))

  useEffect(() => {
    if (adminInfo) {
      setAdmin(true)
    }
  }, [admin, adminInfo])

  const adminHandler = () => {
    setAdmin(true)
  }
  console.log(admin)

  return (
    <Container className='mt-5'>
      {!admin ? <AdminLogin onClick={adminHandler} /> : <AdminEmailList />}
    </Container>
  )
}

export default Admin
