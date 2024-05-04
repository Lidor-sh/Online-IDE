import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from "next-auth/providers/linkedin"
import DiscordProvider from "next-auth/providers/discord"
import CredentialsProvider from 'next-auth/providers/credentials'
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export const authOptions = {
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
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
            authorization: { 
                params: { 
                    scope: 'profile email openid',
                    redirect_uri: 'http://localhost:3000/Login',
                 } },
            issuer: 'https://www.linkedin.com',
            jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
            async profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    firstname: profile.given_name,
                    lastname: profile.family_name,
                    email: profile.email
                }
            },
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!
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
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                //perform login logic
                if (email === "lidorschool3@gmail.com" && password === "123456789")
                    return { id: '1234', name: 'Lidor', email };
                else
                    return null;
            },
        }),
    ]
}