/** @format */

import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from './Header'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className='m-sm-3'>
          <Col md={3}>
            <LinkContainer to='/register'>
              <Button>Register Email</Button>
            </LinkContainer>
          </Col>
          <Col md={3}>
            <LinkContainer to='/admin'>
              <Button>Admin</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
