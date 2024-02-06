import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginCheckActions } from '../Store/Redux';

function Signup() {
  const [userSignUp , setUserSignUp] = useState({
    email : undefined,
    password : '',
    userName : ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function signupHandeler(){
    console.log(userSignUp);
    dispatch(loginCheckActions.login());
    dispatch(loginCheckActions.signUpData(userSignUp));
    navigate('/profile')
  }
  function changeHandeler(event){
    // console.log(event.target.placeholder)
    if(event.target.placeholder === 'Enter Your Email'){
      
      setUserSignUp((prevState) => {
        prevState.email = event.target.value
        return prevState;
      });
    }
    else if(event.target.placeholder === 'Enter Your Password'){
      setUserSignUp((prevState) => {
        prevState.password = event.target.value;
        return prevState;
      });
    }
    else{
      setUserSignUp((prevState) => {
        prevState.userName = event.target.value;
        return prevState;
      });
    }
  }
  return (
    <div className='flex flex-col items-center m-20 justify-between h-48'>
      <h3 className='font-semibold'>SignUp</h3>
      <input type='text'  onChange={changeHandeler} placeholder='Enter Your Email' className='rounded-sm p-2 h-8 border-2 ' />
      <input type='password'  onChange={changeHandeler} placeholder='Enter Your Password' className='rounded-sm p-2 h-8 border-2' />
      <input type='text'  onChange={changeHandeler} placeholder='Enter your Username' className='rounded-sm p-2 h-8 border-2'></input>
      <button onClick={signupHandeler} className='border-2 rounded-md p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer'>Submit</button>
      </div>
  )
}

export default Signup
