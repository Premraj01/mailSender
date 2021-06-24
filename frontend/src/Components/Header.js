/** @format */

import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = ({ history }) => {
  const [admin, setAdmin] = useState({})
  const [navigate, setNavigate] = useState(false)

  const adminInfo = JSON.parse(localStorage.getItem('adminInfo'))

  useEffect(() => {
    setAdmin(adminInfo)
    if (navigate) {
      return <Redirect to='/' push={true} />
    }
  }, [admin, adminInfo, navigate])

  const logoutHandler = () => {
    localStorage.removeItem('adminInfo')
    setNavigate(true)
  }
  console.log(navigate)
  return (
    <div>
      <Navbar variant='light' expand='lg' bg='light' collapseOnSelect>
        <Container>
          <Navbar.Brand>Email Sender</Navbar.Brand>
          <Nav className='ml-auto'>
            {navigate ? (
              <LinkContainer to='/admin'>
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Item onClick={logoutHandler}>
                <>Logout</>
              </Nav.Item>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
