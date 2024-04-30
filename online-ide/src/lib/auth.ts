import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export const  authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
    ]
}

{/*export function loginIsRequiredClient() {
  if (typeof window  !== "undefined"){
    const session = useSession();
    const router = useRouter();
    if (!session)
      router.push("/");
  }
}*/}