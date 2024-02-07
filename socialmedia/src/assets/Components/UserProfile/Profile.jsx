import React from 'react'
import { useSelector } from 'react-redux'
function Profile() {
  const userData = useSelector(state => state.user.userData)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  if(!isLoggedIn){
    return <>
      <h2 className='text-center m-20'>Please Login</h2>
    </>
  }
  else{
  return (
    <div className='flex items-center justify-center mt-5'>
      <div>
        <h2>Welcome {userData[0].firstName} {userData[0].lastName}</h2>
        {console.log(userData)}
      </div>
    </div>
  )
  }
}

export default Profile
