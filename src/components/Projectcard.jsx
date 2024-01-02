import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import projectimg from '../Assets/mediaplayer.png'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

function Projectcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} style={{ width: '18rem', marginBottom: '50px' }} className='rounded border shadow mt-3 ms-5 '>
        <Card.Img variant="top" src={projectimg} />
        <Card.Body >
          <Card.Title>Media Player</Card.Title>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img src={projectimg} alt="img" className='img-fluid' />
            </Col>
            <Col sm={12} md={6}>
              <h5><b>Project Title</b></h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Alias voluptate magnam fugit ipsum tenetur beatae explicabo </p>
              <p><span className='fw-bold'>Language Used:</span>HTML,CSS,JS</p>
              <div>
                <a target='_blank' className='me-3' href="https://github.com/Vishnupalatt/React_media_player.git">
                  <i class="fa-brands fa-github fa-2xl" style={{ color: '#000' }}></i>
                </a>

                <a target='_blank' href="https://mediaplayer-project.netlify.app/">
                  <i class="fa-solid fa-link fa-2xl" style={{ color: '#000' }}></i>
                </a>
              </div>


            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Projectcard