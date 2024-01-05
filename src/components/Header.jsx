import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({inDashboard}) {
    return (

        <Navbar className="position-fixed top-0 w-100 p-3 " style={{backgroundColor:'#227168',zIndex:1}}>
            <Container>
                <Link to={'/'} style={{textDecoration:'none'}}>
                    <Navbar.Brand className='text-white' >
                        <i class="fa-solid fa-diagram-project fa-xl me-3" style={{ color: '#000' }}></i>
                        {' '}
                        Project Fair
                    </Navbar.Brand>
                </Link>
                {
                    inDashboard&&
                    <div className='btn btn-primary'>
                        Log Out
                        <i class="fa-solid fa-right-long fa-beat ms-2" style={{ color: '#fff' }}></i>
                    </div>
                }
            </Container>
        </Navbar>
       

    )
}

export default Header