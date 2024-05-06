import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from "next-auth/providers/linkedin"
import DiscordProvider from "next-auth/providers/discord"
import CredentialsProvider from 'next-auth/providers/credentials'
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
    // Configure one or more authentication providers
    secret: process.env.NEXTAUTH_SECRET,
    trustHost: true,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
            authorization: {
                params: { scope: 'openid profile email' },
                },
            profile(profile : any, tokens: any) {
                return {
                id: tokens.sub,
                name: profile.localizedFirstName + ' ' + profile.localizedLastName,
                email: profile.emailAddress,
                image: profile.profilePicture?.['displayImage~'].elements[0]?.identifiers[0]?.identifier,
                }
            },
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            authorization: {params: {scope: 'identify email'}},
            
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
    ],
    
}