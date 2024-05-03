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
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: { 
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Email'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            authorize(credentials, req) {
                const { email, password} = credentials as {
                    email: string;
                    password: string;
                };

                //perform login logic
                return {id: '1234', name: 'Lidor', email};
            },
        }),
    ]
}