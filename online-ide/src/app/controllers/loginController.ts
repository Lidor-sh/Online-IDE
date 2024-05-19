import { isUserExist, updateUser } from "@/lib/actions/user.action";
import { signIn } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent, ReactElement } from "react";
import toast from "react-hot-toast";

export const signUpCred = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const signUpData = {
    username: fromData.get("username") as string,
    password: fromData.get("password") as string,
    email: fromData.get("email") as string,
    loginMethod: "Credentials",
    profilePicture: "Default",
  };

  // TODO: check if user is already Signed

  // if user.exists() ? throw error : user.signup and signin()
  if ((await isUserExist(signUpData.email)).exist) {
    // TODO: if user is already signed perform an error
    toast.error("Email is already taken");
  } else {
    // TODO: if user is not signed, sign him up and than sign him in
    await updateUser(signUpData);
    toast.error("Email is already taken");
    const login = await signIn("credentials", signUpData);

    console.log(login);

    if (login && login.ok) {
      toast.success("Login successful");
    } else {
      toast.error("Wrong email or password");
    }
  }
};

export const signInCred = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const loginData = {
    email: fromData.get("email"),
    password: fromData.get("password"),
    callbackUrl: "/",
    redirect: false,
  };
  const login = await signIn("credentials", loginData);

  if (login) {
    if (login.ok) {
      toast.success("Login successful");
    } else {
      toast.error("Wrong email or password");
    } //else if (login.status === 403) {
    //toast.error("This email is used in another login method");
    //}
  }
};

export const handleSocialLogin = async (method: string) => {
  try {
    var login = await signIn(method, { callbackUrl: "/Login" });
  } catch (e) {
    console.log(e);
  }
};
