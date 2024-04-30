"use client"

import { signIn } from "next-auth/react";

const handleSignIn = (method: string) => {
    switch (method) {
        case "google":
            signIn("google");
            break;
        case "github":
            signIn("github");
            break;
    }
}

export function GoogleSignInButton() {


    return (
        <button type="button" className="login-with-google-btn" onClick={() => handleSignIn("google")}>Sign in with Google</button>
    )
}

export function GithubSignInButton() {
    return (
        <button type="button" className="login-with-github-btn" onClick={() => handleSignIn("github")}>Sign in with Github</button>
    )
}

export function GoogleSignUpButton() {
    return (
        <button type="button" className="login-with-google-btn" onClick={() => handleSignIn("google")}>Sign up with Google</button>
    )
}

export function GithubSignUpButton() {
    return (
        <button type="button" className="login-with-github-btn" onClick={() => handleSignIn("github")}>Sign up with Github</button>
    )
}