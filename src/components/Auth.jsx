import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'


function Auth({ register }) {
    const registerForm = register ? true : false
    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='container w-75'>
                <Link to={'/'} style={{ textDecoration: 'none', color: '#000', marginBottom: '20px' }} className='d-flex align-items-center'>
                    <i class="fa-solid fa-arrow-left me-2"></i>
                    Back to home
                </Link>
                <div className='bg-danger p-5 rounded' >
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-2578971-2147152.png?f=webp" alt="img" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex align-items-center flex-column'>
                                <div className='d-flex mt-2 text-light'>
                                    <i class="fa-solid fa-diagram-project fa-2xl mt-4 me-2" style={{ color: '#000' }}></i>
                                    <span className='h1 fw-bolder'>Project Fair</span>
                                </div>
                                <h4 className='text-light'>
                                    {
                                        registerForm ? 'Sign Up For Project Fair' : 'Sign In For Project Fair'
                                    }
                                </h4>
                                <form className='w-100 text-light'>
                                    {
                                        registerForm &&
                                        <Form.Group className="mb-3" controlId="Username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your Username" />
                                        </Form.Group>

                                    }
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email Adress" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your Password" />
                                    </Form.Group>
                                    {/* <div className='d-flex justify-content-center mt-3'>
                                        <Button className='btn-success '>
                                            {
                                                registerForm ? 'Sign Up' : 'Sign In'
                                            }
                                        </Button>
                                    </div> */}
                                    {
                                        registerForm?
                                        <div>
                                            <Button type='submit' className='btn btn-success'>Sign Up</Button>
                                            <Link to={'/login'} className='ms-3 text-black'>Already a User? Sign In</Link>
                                        </div>:
                                        <div>
                                            <Button type='submit' className='btn btn-warning'>Sign In</Button>
                                            <Link to={'/register'} className='ms-3 text-black'>New User? Sign Up</Link>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth