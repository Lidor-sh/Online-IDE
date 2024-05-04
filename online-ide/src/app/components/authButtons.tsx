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
    case "discord":
      login = await signIn("discord");
      break;
    case "linkedin":
      login = await signIn("linkedin");
      break;
  }
  console.log("Signing in performed");
};

export function GoogleSignInButton() {
  return (
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="google-icon"
      onClick={() => handleSignIn("google")}
    ></button>
  );
}

export function GithubSignInButton() {
  return (
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="github-icon"
      onClick={() => handleSignIn("github")}
    ></button>
  );
}

export function DiscordSignUpButton() {
  return (
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="discord-icon"
      onClick={() => handleSignIn("discord")}
    ></button>
  );
}

export function LinkedInSignUpButton() {
  return (     
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="linkedIn-icon"
      onClick={() => handleSignIn("linkedin")}
    ></button>
  );
}

