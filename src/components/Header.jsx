import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar className="position-fixed top-0 w-100 " style={{backgroundColor:'#227168',zIndex:1}}>
            <Container>
                <Link to={'/'} style={{textDecoration:'none'}}>
                    <Navbar.Brand className='text-white' >
                        <i class="fa-solid fa-diagram-project fa-xl me-5" style={{ color: '#000' }}></i>
                        {' '}
                        Project Fair
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>

    )
}

export default Header