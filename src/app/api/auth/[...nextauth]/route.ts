
import NextAuth from 'next-auth'
import gitHub from 'next-auth/providers/github'

const handler = NextAuth({
    providers: [
        gitHub({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        }),
    ],
})

export { handler as GET, handler as POST }
