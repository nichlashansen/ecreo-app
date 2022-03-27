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
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    }
})