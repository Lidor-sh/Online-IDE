'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import backImage from "../images/background2.jpg";

const Page = () => {
  const [currentPage, setCurrentPage] = useState('Login');

  const LoginPage = () => (
    <div className="container">
      <div className="box">
        <div className="login-container">
          <h2 className='login-header'>Sign in</h2>
          <form className="form">
            <div className="form-group">
              {/*<label htmlFor="email">Email</label>*/}
              <input name="email" type="email" className="form-control" placeholder='Email' required />
            </div>
            <div className="form-group">
              {/*<label htmlFor="password">Password</label>*/}
              <input name="password" type="password" className="form-control" placeholder='Password' required />
            </div>
            <div className='login-footer'>
              <div className="form-group remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember" className='remember-me'>Remember me</label>
              </div>
              <div className="forgot-password">
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
            </div>
            <button type="submit" className="button">Sign in</button>
          </form>
          <div className="create-account">
            <button onClick={() => setCurrentPage('SignUp')} className="create-link">Don{"'"}t have an account?</button>
          </div>
          <hr/>
          <div className="social-login-container">
            <button type="button" className="login-with-google-btn" >Sign in with Google</button>
            <button type="button" className="login-with-github-btn" >Sign in with Github</button>
          </div>
        </div>
        <Image
          src={backImage} 
          alt="background"
          className='background-image' />
      </div>
    </div>
  );

  const SignUpPage = () => (
    <div className="container">
      <div className="box">
        <div className="signup-container">
          <h2 className='signup-header'>Sign up</h2>
          <form className="form">
            <div className="form-group">
              {/*<label htmlFor="name">Name</label>*/}
              <input name="name" type="text" className="form-control" placeholder='Username' required />
            </div>
            <div className="form-group">
              {/*<label htmlFor="email">Email</label>*/}
              <input name="email" type="email" className="form-control" placeholder='Email' required />
            </div>
            <div className="form-group">
              {/*<label htmlFor="password">Password</label>*/}
              <input name="password" type="password" className="form-control" placeholder='Password' required />
            </div>
            <button type="submit" className="button">Create Account</button>
          </form>
          <div className="login-instead">
            <button onClick={() => setCurrentPage('Login')} className="signup-link">Already have an account?</button>
          </div>
          <hr/>
          <div className="social-login-container">
            <button type="button" className="login-with-google-btn" >Sign in with Google</button>
            <button type="button" className="login-with-github-btn" >Sign in with Github</button>
          </div>
        </div>
        <Image
          src={backImage} 
          alt="background"
          className='background-image' />
      </div>
    </div>
  );

  return (
    <>
      {currentPage === 'Login' ? <LoginPage /> : <SignUpPage />}
    </>
  );
};

export default Page;


