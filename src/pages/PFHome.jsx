import React from 'react'
import { Row, Col } from 'react-bootstrap'
import webdevolep from '../Assets/web devolep.png'
import Homeprojects from '../components/Homeprojects'
import { Link } from 'react-router-dom'

function PFHome() {
    return (
        <>
            <div className='container-fluid rounded' style={{ width: '100%', height: '100%', backgroundColor: '#227168' }}>
                <Row className='align-items-center p-5 h-100'>
                    <Col sm={12} md={6}>
                        <h6 style={{ fontSize: '80px' }} className='text-light'>
                            {/* <i class="fa-solid fa-diagram-project fa-xl fa-fade me-5" style={{ color: '#000' }}></i> */}
                            Project Fair
                        </h6>
                        <p className='p-3' style={{ textAlign: 'justify' }}><b> Streamline your projects with our intuitive project management website. Effortlessly organize tasks, collaborate with teams, and track progress in real-time, ensuring seamless project coordination from inception to completion.</b></p>
                        <button className='btn btn-info'>Start to Explore <i class="fa-solid fa-right-long fa-beat ms-2" style={{ color: '#fff' }}></i></button>
                    </Col>
                    <Col sm={12} md={6} >
                        <img src={webdevolep} className='img-fluid' alt="" />
                    </Col>
                </Row>

            </div>
            <div style={{backgroundColor:'#ddd8b8'}} >
                <h3 className='text-center fw-bold p-3'>My Projects</h3>
                <div style={{ content: '', width: '8%', height: '2px', backgroundColor: '#000', textAlign: 'center', margin: '0 auto' }}></div>
                <Homeprojects />
                <div className='text-center pb-3 '>
                    <Link className='text-black' to='/projects'>See More</Link>
                </div>

            </div>
        </>

    )
}

export default PFHome