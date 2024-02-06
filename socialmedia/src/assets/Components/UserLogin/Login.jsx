import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className='flex flex-col items-center m-20 justify-between h-48'>
      <h3 className='font-semibold'>Login If Already Registered</h3>
      <input type='text' placeholder='Enter Your UserName' className='rounded-sm p-2 h-8 border-2 ' />
      <input type='password' placeholder='Enter Your Password' className='rounded-sm p-2 h-8 border-2' />
      <input type='submit' className='border-2 rounded-md p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer'></input>
      <NavLink to='/signup'>Singup for a new User</NavLink>
    </div>
    </>
  )
}

export default Login
