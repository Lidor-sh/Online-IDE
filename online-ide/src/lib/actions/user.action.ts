"use server";

import { BlobOptions } from "buffer";
import User from "../models/user.model";
import { connectToDB } from "../mogoose";

interface Params {
  username: string;
  password: string;
  email: string;
  loginMethod: string;
  profilePicture: string;
}

export async function updateUser({
  username,
  password,
  email,
  loginMethod,
  profilePicture,
}: Params): Promise<void> {
  connectToDB();
  try {
    await User.findOneAndUpdate(
      { email: email },
      {
        username: username.toLowerCase(),
        password,
        loginMethod,
        profilePicture,
      },
      {
        upsert: true,
      }
    );
  } catch (err: any) {
    throw new Error(`Failed to update/create  user: ${err.message}`);
  }
}

export async function fetchUser(email: string) {
  try {
    connectToDB();

    return await User.findOne({ email: email });
  } catch (err: any) {
    throw new Error(`Failed to fetch user: ${err.message}`);
  }
}

export async function isUserExist(email: string) {
  return { exist: (await fetchUser(email)) !== null };
}
