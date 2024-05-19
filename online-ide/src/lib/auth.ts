import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import { fetchUser, updateUser } from "./actions/user.action";
import bcrypt from "bcrypt";
import { STATUS_CODES } from "http";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: "identify email" } },
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        //perform login logic
        const userInfo = await fetchUser(email);
        console.log(userInfo);
        if (userInfo.loginMethod !== "Credentials") {
          throw new Error("Access denied");
        }
        const isPasswordEqual = await bcrypt.compare(
          password,
          userInfo.password
        );
        if (userInfo.email === email && isPasswordEqual)
          return {
            id: userInfo._id,
            name: userInfo.username,
            email: userInfo.email,
            image:
              userInfo.profilePicture === "Default"
                ? null
                : userInfo.profilePicture,
          };
        else return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (account.provider === "credentials") return true;
      const email = profile.email || user.email;
      const userInfo = await fetchUser(email);
      if (userInfo) {
        if (userInfo.loginMethod === account.provider) return true;
        else false;
      } else {
        const data = {
          username: user.name,
          password: "-1",
          email: email,
          loginMethod: account.provider,
          profilePicture: user.image,
        };
        await updateUser(data);
        return true;
      }
    },
  },
  pages: {
    signIn: "/Login",
    signUp: "/Login",
    error: "/Login",
  },
};
