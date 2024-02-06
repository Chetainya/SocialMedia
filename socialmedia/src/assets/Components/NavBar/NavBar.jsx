import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function NavBar() {
  return (
    <>
    <div className='w-auto rounded-lg m-2 h-14 flex flex-row bg-pink-400 text-blue-700 font-medium justify-evenly items-center'>
        <NavLink to='www.google.com' className='cursor-pointer'>Home</NavLink>
        <NavLink to='www.google.com' className='cursor-pointer'>Feed</NavLink>
        <form>
        <input type='text' placeholder='Search Here' className='rounded-sm p-2 h-8'></input>
        </form>
        <NavLink to='/profile' className='cursor-pointer'>Profile</NavLink>
        <button className='border-solid border-4 p-1 bg-gray-100 rounded-lg'><NavLink to='/login' className='cursor-pointer'>Login/Signip</NavLink></button>
        
    </div>
    <Outlet />
    </>
  )
}

export default NavBar
