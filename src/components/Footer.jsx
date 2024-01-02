import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#cccccc' }}>
        <Row className='p-5'>
          <Col md='4'>
            <h3 className='mt-1'><i class="fa-solid fa-diagram-project fa-xl me-5" style={{ color: '#000' }}></i>Project Fair</h3><hr />
            <p className='mt-4' style={{ textAlign: 'justify' }}>
            Streamline your projects with our intuitive project management website. Effortlessly organize tasks, collaborate with teams, and track progress in real-time, ensuring seamless project coordination from inception to completion..</p>
          </Col>
          <Col md='4' className='d-flex flex-column text-center'>
            <h4>Links</h4>
            <hr />
            <Link className='text-black mt-3' style={{ textDecoration: 'none' }} to={'/'}>Landing Page</Link>
            <Link className='text-black mt-2' style={{ textDecoration: 'none' }} to={'/home'}>Home</Link>
            <Link className='text-black mt-2' style={{ textDecoration: 'none' }} to={'/watch-history'}>Watch History</Link>

          </Col>
          <Col className='d-flex flex-column text-center'>
            <h4>Guides</h4>
            <hr />
            <Link className='text-black mt-3' style={{ textDecoration: 'none' }} to={'https://react.dev/'}>React</Link>
            <Link className='text-black mt-2' style={{ textDecoration: 'none' }} to={'https://react-bootstrap.netlify.app/'}>React Bootstrap</Link>
            <Link className='text-black mt-2' style={{ textDecoration: 'none' }} to={'https://fontawesome.com/'}>Font Awesome</Link>

          </Col>
        </Row>

      </div>
        </div>
    )
}

export default Footer