import NextAuth from 'next-auth'
import AzureProvider from 'next-auth/providers/azure-ad'

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
        secret: 'IB12Y01nimLZdOwOimdj9wNEO9djhtiGIBdVyF+YhW8=',
    }
})