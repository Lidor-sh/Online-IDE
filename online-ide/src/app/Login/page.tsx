"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import backImage from "../images/background2.jpg";
import { signIn, useSession } from "next-auth/react";
import {
  GithubSignInButton,
  GoogleSignInButton,
  DiscordSignUpButton,
  LinkedInSignUpButton,
  FacebookSignInButton,
} from "../components/authButtons";
import { redirect } from "next/navigation";
import { PassThrough } from "stream";
import toast from "react-hot-toast";

const Page = () => {
  const [currentPage, setCurrentPage] = useState("Login");
  const [currActive, setCurrentActive] = useState("Login");
  const { data: session } = useSession();

  if (session) {
    console.log("Signed in as ", session);
    redirect("../Projects/");
  } else {
    console.log("Not signed in", session);
  }

  const signUpCred = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const signUpData = {
      username: fromData.get("username"),
      email: fromData.get("email"),
      password: fromData.get("password"),
    };

    // TODO: check if user is already signed

    // TODO: if user is already signed perform an error

    // TODO: if user is not signed, sign him up and than sign him in

    // if user.exists() ? throw error : user.signup and signin()
  };

  const signInCred = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const loginData = {
      email: fromData.get("email"),
      password: fromData.get("password"),
      callbackUrl: "/",
      redirect: false,
    };
    const login = await signIn("credentials", loginData);

    console.log(login);

    if (login && login.ok) {
      toast.success("Login successful");
    } else {
      toast.error("Wrong email or password");
    }
  };

  const LoginPage = () => (
    <div className="login-container">
      <h2 className="login-header">Sign in</h2>
      <form className="form space-y-2" onSubmit={signInCred}>
        <div className="form-group">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
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
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 accent-white  bg-grey-700 text-blacktheme  rounded cursor-pointer"
            />
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
      <div className="social-login-container flex justify-center items-center space-x-2">
        <GoogleSignInButton />
        <GithubSignInButton />
        <DiscordSignUpButton />
        <FacebookSignInButton />
      </div>
    </div>
  );

  const SignUpPage = () => (
    <div className="signup-container">
      <h2 className="signup-header">Sign up</h2>
      <form className="form space-y-2">
        <div className="form-group">
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
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
      <div className="social-login-container flex justify-center items-center space-x-2">
        <GoogleSignInButton />
        <GithubSignInButton />
        <DiscordSignUpButton />
        <FacebookSignInButton />
      </div>
    </div>
  );
  return (
    <>
      <div className="container max-w-full max-h-full ">
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
            className="background-image overflow-hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
