"use client";

import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const handleSignIn = async (method: string) => {
  var login;
  switch (method) {
    case "google":
      login = await signIn("google");
      break;
    case "github":
      login = await signIn("github");
      break;
  }
  console.log("Signing in performed");
};

export function GoogleSignInButton() {
  return (
    <button
      type="button"
      className="login-with-google-btn w-10 h-10 rounded-full"
      onClick={() => handleSignIn("google")}
    ></button>
  );
}

export function GithubSignInButton() {
  return (
    <button
      type="button"
      className="login-with-github-btn w-10 h-10 rounded-full"
      onClick={() => handleSignIn("github")}
    ></button>
  );
}

export function GoogleSignUpButton() {
  return (
    <button
      type="button"
      className="login-with-google-btn w-10 h-10 rounded-full"
      onClick={() => handleSignIn("google")}
    ></button>
  );
}

export function GithubSignUpButton() {
  return (
    <button
      type="button"
      className="login-with-github-btn w-10 h-10 rounded-full"
      onClick={() => handleSignIn("github")}
    ></button>
  );
}
