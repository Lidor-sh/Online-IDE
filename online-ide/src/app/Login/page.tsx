"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import backImage from "../images/background2.jpg";
import { useSession } from "next-auth/react";
import {
  GithubSignInButton,
  GithubSignUpButton,
  GoogleSignInButton,
  GoogleSignUpButton,
} from "../components/authButtons";
import { useRouter } from "next/navigation";

const Page = () => {
  const [currentPage, setCurrentPage] = useState("Login");
  const [currActive, setCurrentActive] = useState("Login");
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    console.log("Signed in as ", session);
    router.push("../Projects/");
  } else {
    console.log("Not signed in", session);
  }

  const LoginPage = () => (
    <div className="login-container">
      <h2 className="login-header">Sign in</h2>
      <form className="form">
        <div className="form-group">
          {/*<label htmlFor="email">Email</label>*/}
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          {/*<label htmlFor="password">Password</label>*/}
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="login-footer">
          <div className="form-group remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" className="remember-me">
              Remember me
            </label>
          </div>
          <div className="forgot-password">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
        </div>
        <button type="submit" className="button">
          Sign in
        </button>
      </form>
      <div className="create-account">
        <button
          onClick={() => {
            setCurrentActive("SignUp");
            setTimeout(() => {
              setCurrentPage("SignUp");
            }, 500);
          }}
          className="create-link"
        >
          Don{"'"}t have an account?
        </button>
      </div>
      <hr />
      <div className="social-login-container">
        <GoogleSignInButton />
        <GithubSignInButton />
      </div>
    </div>
  );

  const SignUpPage = () => (
    <div className="signup-container">
      <h2 className="signup-header">Sign up</h2>
      <form className="form">
        <div className="form-group">
          {/*<label htmlFor="name">Name</label>*/}
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          {/*<label htmlFor="email">Email</label>*/}
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          {/*<label htmlFor="password">Password</label>*/}
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="button">
          Create Account
        </button>
      </form>
      <div className="login-instead">
        <button
          onClick={() => {
            setCurrentActive("Login");
            setTimeout(() => {
              setCurrentPage("Login");
            }, 500);
          }}
          className="signup-link"
        >
          Already have an account?
        </button>
      </div>
      <hr />
      <div className="social-login-container">
        <GoogleSignUpButton />
        <GithubSignUpButton />
      </div>
    </div>
  );
  return (
    <>
      <div className="container">
        <div className="box">
          <div
            className="content"
            style={{
              transform: `translateX(${currActive === "Login" ? "0%" : "25%"})`,
            }}
          >
            {currentPage === "Login" ? <LoginPage /> : <SignUpPage />}
          </div>
          <Image
            src={backImage}
            alt="background"
            className="background-image"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
