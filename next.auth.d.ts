import 'next-auth'
import { DefaultSession, DefaultUser } from 'next-auth';


declare module "next-auth/jwt" {
    interface JWT {
      role: string;
     
    }
  }
  declare module "next-auth"  {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
  
    interface User  extends DefaultUser{
      role: string;
    }
  
    interface Session extends DefaultSession {
      user?: User;
    }
  }
  