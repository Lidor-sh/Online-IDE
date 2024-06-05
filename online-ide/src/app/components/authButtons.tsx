"use client";

import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { handleSocialLogin } from "../controllers/loginController";

export function GoogleSignInButton() {
  return (
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="google-icon"
      onClick={() => handleSocialLogin("google")}
    ></button>
  );
}

export function GithubSignInButton() {
  return (
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="github-icon"
      onClick={() => handleSocialLogin("github")}
    ></button>
  );
}

export function FacebookSignInButton() {
  return (
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="facebook-icon"
      onClick={() => handleSocialLogin("facebook")}
    ></button>
  );
}

export function DiscordSignUpButton() {
  return (
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="discord-icon"
      onClick={() => handleSocialLogin("discord")}
    ></button>
  );
}

export function LinkedInSignUpButton() {
  return (
    <button
      type="button"
      className="login-btn w-10 h-10 rounded-full"
      id="linkedIn-icon"
      onClick={() => handleSocialLogin("linkedin")}
    ></button>
  );
}
