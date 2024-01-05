import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-5 me-2 bg-light'>
      <div>
        <h3 className='text-center'><b>My Profile</b></h3>
      </div>
      <div className='mt-3 row '>
        <label className='text-center ' htmlFor='profile'>
          <input type="file" id='profile' style={{ display: 'none' }} />
          <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" width={'100px'} height={'100px'} alt="profile image" />
        </label>
        <div className='mt-4'>
          <input type="text" className='form-control' placeholder='Enter Your Name' />
        </div>
        <div className='mt-4'>
          <input type="text" className='form-control' placeholder='Enter Your LinkedIn ID' />
        </div>
        <div className='mt-4'>
          <input type="text" className='form-control' placeholder='Enter Your Github ID' />
        </div>
      </div>
    </div>
  )
}

export default Profile