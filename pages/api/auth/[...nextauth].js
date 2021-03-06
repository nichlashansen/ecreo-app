import NextAuth from 'next-auth'
import AzureProvider from 'next-auth/providers/azure-ad'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../Lib/mongodb'

export default NextAuth({
    providers: [
    AzureProvider({
        clientId: process.env.AZURE_CLIENT,
        clientSecret: process.env.AZURE_SECRET,
        tenantId: process.env.AZURE_TENANT,
    }),

    ],
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
              session.user.id = token.uid;
            }
            return session;
          },
          jwt: async ({ user, token }) => {
            if (user) {
              token.uid = user.id;
            }
            return token;
          },
    },
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    }
})