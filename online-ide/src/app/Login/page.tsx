'use client';
import React, { useState } from 'react';

<<<<<<< HEAD

const LoginPage = ({ currentPage, setCurrentPage } : any) => (
  <div>
    <button onClick={() => setCurrentPage('SignUp')}>
        go to SignUp!
    </button>
  </div>
);

const SignUpPage = ({ currentPage, setCurrentPage } : any) => (
  <div>
    <button onClick={() => setCurrentPage('Login')}>
        go to Login!
    </button>
  </div>
);

const Page = ({ Component, pageProps } : any) => {
=======
const Page = () => {
>>>>>>> ab28898c25d7c420c72ee3b8d4f0d6d9f719c729
  const [currentPage, setCurrentPage] = useState('Login');

  const LoginPage = () => (
    <div className="container">
      <div className="login-container">
        <h2>Sign in</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" className="form-control" required />
          </div>
          <div className="form-group remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="button">Sign in</button>
          <div className="forgot-password">
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
        </form>
        <div className="create-account">
          Don't have an account? <button onClick={() => setCurrentPage('SignUp')} className="link">Create account</button>
        </div>
      </div>
      <div className="social-login-container">
        {/* Social login buttons */}
      </div>
    </div>
  );

  const SignUpPage = () => (
    <div className="container">
      <div className="signup-container">
        <h2>Create account</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" className="form-control" required />
          </div>
          <button type="submit" className="button">Create account</button>
        </form>
        <div className="login-instead">
          Already have an account? <button onClick={() => setCurrentPage('Login')} className="link">Sign in</button>
        </div>
      </div>
      <div className="social-login-container">
        {/* Social login buttons */}
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


