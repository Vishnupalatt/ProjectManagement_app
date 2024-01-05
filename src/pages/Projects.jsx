import React from 'react'
import Header from '../components/Header'

function Projects() {
    return (
        <div>
            <Header />
            <div style={{ marginTop: '100px' }}>
                <div className='text-center mx-2 mb-2 border rounded'>
                    <h3>All Projects</h3>
                    <div className='d-flex justify-content-center mt-5 w-100 '>
                        <div className='d-flex align-items-center border rounded w-50 '>
                            <input type="text" placeholder='Enter Keyword to Search' className='form-control rounded' />
                            <div className='ms-3 px-2 '>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects