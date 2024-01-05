import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#24272b' }}>
        <Row className='p-5'>
          <Col md='4'>
            <h3 className='mt-1 text-light'><i class="fa-solid fa-diagram-project fa-xl me-5" style={{ color: '#fff' }}></i>Project Fair</h3><hr />
            <p className='mt-4 text-light' style={{ textAlign: 'justify' }}>
            Streamline your projects with our intuitive project management website. Effortlessly organize tasks, collaborate with teams, and track progress in real-time, ensuring seamless project coordination from inception to completion..</p>
          </Col>
          <Col md='4' className='d-flex flex-column text-center'>
            <h4 className='text-light'>Links</h4>
            <hr />
            <Link className='text-light mt-3' style={{ textDecoration: 'none' }} to={'/'}>Landing Page</Link>
            <Link className='text-light mt-2' style={{ textDecoration: 'none' }} to={'/login'}>Login</Link>
            <Link className='text-light mt-2' style={{ textDecoration: 'none' }} to={'/register'}>Register</Link>
            <Link className='text-light mt-2' style={{ textDecoration: 'none' }} to={'/dashboard'}>Dashboard</Link>

          </Col>
          <Col className='d-flex flex-column text-center'>
            <h4 className='text-light'>Guides</h4>
            <hr />
            <Link className='text-light mt-3' style={{ textDecoration: 'none' }} to={'https://react.dev/'}>React</Link>
            <Link className='text-light mt-2' style={{ textDecoration: 'none' }} to={'https://react-bootstrap.netlify.app/'}>React Bootstrap</Link>
            <Link className='text-light mt-2' style={{ textDecoration: 'none' }} to={'https://fontawesome.com/'}>Font Awesome</Link>

          </Col>
        </Row>

      </div>
        </div>
    )
}

export default Footer