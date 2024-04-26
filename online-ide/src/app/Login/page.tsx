'use client';

import React, { useState } from 'react';


const LoginPage = ({ currentPage, setCurrentPage } : any) => (
  <div>
    <button onClick={() => setCurrentPage('SignUp')}>
        go to SignUp
    </button>
  </div>
);

const SignUpPage = ({ currentPage, setCurrentPage } : any) => (
  <div>
    <button onClick={() => setCurrentPage('Login')}>
        go to Login
    </button>
  </div>
);

const Page = ({ Component, pageProps } : any) => {
  const [currentPage, setCurrentPage] = useState('Login');

  return (
    <>
      {currentPage === 'Login' ?
       <LoginPage currentPage={currentPage} setCurrentPage={setCurrentPage} /> 
       : 
       <SignUpPage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </>
  ); 
};

export default Page;
