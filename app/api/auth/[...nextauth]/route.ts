import NextAuth, {  NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
     
    ],
    callbacks: {
      async jwt({ token, user })  {
        if (user) {
        
          token.role = user.role
        }
  
        return token
      },
      async session({ session, token })   {
        if (session.user && token) {
          // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
          session.user.role = token.role
        
        }
  
        return session
      }
    },
    session: {
      strategy: 'jwt',
    },
    pages:{
      signIn: '/signin',
    }
    
  
    
  };

  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST };


