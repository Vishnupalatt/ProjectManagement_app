import React from 'react'
import Header from '../components/Header'
import Myprojects from '../components/Myprojects'
import { Row,Col } from 'react-bootstrap'
import Profile from '../components/Profile'

function Dashboard() {
    return (
        <div>
            <Header inDashboard={true} />
            <Row style={{marginTop:'100px',marginBottom:'100px'}}>
                <Col sm={12} md={7} className='ms-4'>
                    <h1 className='text-center'>Welcome <span className='text-warning'>User</span></h1>
                    <Myprojects/>
                
                </Col>
                <Col sm={12} md={4}>
                    <Profile/>

                
                </Col>
            </Row>
        </div>
       
    )
}

export default Dashboard