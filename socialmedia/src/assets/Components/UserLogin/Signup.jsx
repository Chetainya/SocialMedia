import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginCheckActions } from "../Store/Redux";

function Signup() {
  const [userSignUp, setUserSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
  });
  const [errors, setErrors] = useState({});
  const [emailValid, setEmailValid] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function signupHandeler() {
    console.log(userSignUp);
    dispatch(loginCheckActions.login());
    dispatch(loginCheckActions.signUpData(userSignUp));
    let formError = {};
    if (userSignUp.firstName.length === 0) {
      formError.firstName = "First Name is Required";
    }
    if (userSignUp.lastName.length === 0) {
      formError.lastName = 'last Name is Required'
    }
    if (userSignUp.email.length === 0 || !userSignUp.email.includes('@')) {
      formError.email = 'Invalid Email'
    }
    if (userSignUp.password.length === 0) {
      formError.password = 'Invalid Password'
    }
    if (userSignUp.userName.length === 0) {
      formError.userName = 'Invalid UserName'
    }
    if (Object.keys(formError).length > 0) {
      setErrors(formError);
    } else {
      navigate("/profile");
    }
  }
  function changeHandeler(event) {
    // console.log(event.target.placeholder)
    if (event.target.placeholder === "First Name") {
      setErrors((prevErrors) => {
        prevErrors.firstName = ''
        return prevErrors;
      })
      setUserSignUp((prevState) => {
        let state = {...prevState};
        state.firstName = event.target.value;
        // prevState.firstName = event.target.value;
        return state;
      });
    } else if (event.target.placeholder === "Last Name") {
      setErrors((prevErrors) => {
        prevErrors.lastName = ''
        return prevErrors;
      })
      setUserSignUp((prevState) => {
        let state = {...prevState};
        state.lastName = event.target.value;
        // prevState.firstName = event.target.value;
        return state;
      });
    } else if (event.target.placeholder === "Enter Your Email") {
      setErrors((prevErrors) => {
        prevErrors.email = ''
        return prevErrors;
      })
      setEmailValid(true);
      setUserSignUp((prevState) => {
        let state = {...prevState};
        state.email = event.target.value;
        // prevState.firstName = event.target.value;
        return state;
      });
    } else if (event.target.placeholder === "Enter Your Password") {
      setErrors((prevErrors) => {
        prevErrors.password = ''
        return prevErrors;
      })
      setUserSignUp((prevState) => {
        
        let state = {...prevState};
        state.password = event.target.value;
        // prevState.firstName = event.target.value;
        return state;
      });
    } else {
      setErrors((prevErrors) => {
        prevErrors.userName = ''
        return prevErrors;
      })
      setUserSignUp((prevState) => {
        let state = {...prevState};
        state.userName = event.target.value;
        // prevState.firstName = event.target.value;
        return state;
      });
    }
  }
  function emailHandeler() {
    if (userSignUp.email.length === 0 || !userSignUp.email.includes("@")) {
      setEmailValid(false);
    }
  }
  return (
    <div className="flex flex-col items-center m-20 justify-between h-80">
      <h3 className="font-semibold">SignUp</h3>
      <input
        type="text"
        onChange={changeHandeler}
        placeholder="First Name"
        className="rounded-sm p-2 h-8 border-2 "
      />
      {errors.firstName === 'First Name is Required' && <span className="text-red-300 ">Invalid FirstName</span>}
      <input
        type="text"
        onChange={changeHandeler}
        placeholder="Last Name"
        className="rounded-sm p-2 h-8 border-2 "
      />
      {errors.lastName === 'last Name is Required' && <span className="text-red-300 ">Invalid LastName</span>}
      <input
        type="text"
        onBlur={emailHandeler}
        onChange={changeHandeler}
        placeholder="Enter Your Email"
        className="rounded-sm p-2 h-8 border-2 "
      />
      
      {emailValid === false || errors.email === 'Invalid Email' ? (
        <span className="text-red-300">Invalid Email</span>
      ) : null}
      <input
        type="password"
        onChange={changeHandeler}
        placeholder="Enter Your Password"
        className="rounded-sm p-2 h-8 border-2"
      />
      {errors.password === 'Invalid Password' && <span className="text-red-300 ">Invalid Password</span>}
      <input
        type="text"
        onChange={changeHandeler}
        placeholder="Enter your Username"
        className="rounded-sm p-2 h-8 border-2"
      ></input>
      {errors.userName === 'Invalid UserName' && <span className="text-red-300 ">Invalid UserName</span>}
      <button
        onClick={signupHandeler}
        className="border-2 rounded-md p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}

export default Signup;
