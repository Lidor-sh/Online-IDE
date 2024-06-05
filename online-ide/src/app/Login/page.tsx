"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import backImage from "../images/background2.jpg";
import returnImage from "../images/return-icon.png";
import { useSession } from "next-auth/react";
import {
  GithubSignInButton,
  GoogleSignInButton,
  DiscordSignUpButton,
  FacebookSignInButton,
} from "../components/authButtons";
import toast from "react-hot-toast";
import { signInCred, signUpCred } from "../controllers/loginController";
import { useRouter } from "next/navigation";

const Page = () => {
  const [currentPage, setCurrentPage] = useState("Login");
  const [currActive, setCurrentActive] = useState("Login");
  const [hasShownAlert, setHasShownAlert] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("error") === "AccessDenied" && !hasShownAlert) {
      toast.error("This email is used in another login method");
      setHasShownAlert(true);
    }
    if (searchParams.get("msg") === "signup") {
      setCurrentActive("SignUp");
      setCurrentPage("SignUp");
    }
  }, [hasShownAlert]);

  if (session) {
    console.log("Signed in as ", session);
    router.push("/Projects/");
  } else {
    console.log("Not signed in", session);
  }

  const goToHome = () => {
    router.push("/");
  };

  const LoginPage = () => (
    <div className="login-container">
      <div className="flex items-center justify-center mb-5">
        <button
          className="flex items-center justify-center h-full"
          onClick={goToHome}
        >
          <Image src={returnImage} alt="background" className="size-9" />
        </button>
        <h2 className="login-header flex-1">Sign in</h2>
      </div>
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
      <div className="flex items-center justify-center mb-5">
        <button
          className="flex items-center justify-center h-full"
          onClick={goToHome}
        >
          <Image src={returnImage} alt="background" className="size-9" />
        </button>
        <h2 className="signup-header flex-1">Sign up</h2>
      </div>
      <form className="form space-y-2" onSubmit={signUpCred}>
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
