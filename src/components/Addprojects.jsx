import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';

function Addprojects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="light" onClick={handleShow}>
                Add Projects
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold'>Upload Projects</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <label htmlFor="project" className='text-center'>
                                    <input type="file" id='project' style={{ display: 'none' }} />
                                    <img src="https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg" alt="image" className='img-fluid' />
                                </label>
                            </div>
                            <div className='col-lg-7'>
                                <input type="text" placeholder='Project Title' className='form-control mb-2 rounded' />
                                <input type="text" placeholder='Project Overview' className='form-control mb-2 rounded' />
                                <input type="text" placeholder='Languages Used' className='form-control mb-2 rounded' />
                                <input type="text" placeholder='Github URL' className='form-control mb-2 rounded' />
                                <input type="text" placeholder='Demo URL' className='form-control mb-2 rounded' />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Addprojects