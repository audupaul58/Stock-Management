import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../Config/prisma.ts'
import { debug } from "console"

export const authOptions = {

    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    secret: process.env.NextAuth_SECRET,
    session:{
        strategy:"database",
        maxAge: 60 * 60 * 24 *30,
        updateAge: 60 * 60 * 24
    },

    useSecureCookies: process.env.NODE_ENV === "production",

    pages:{
        signIn: '/'
    }, 

    callbacks:{
     async redirect({url, baseUrl}){
      return baseUrl;
     },

      async session({session, token, user }){
            if(session.user) session.user.id = user.id

            return session
        }

      
    },

    event : {},
    debug: false,

   
    
  }

export default NextAuth(authOptions)