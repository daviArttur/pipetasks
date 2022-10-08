import React, { createContext, ReactNode, useEffect, useState } from "react";
// Router
import Router, { useRouter } from "next/router";

// Cookies
import { parseCookies, setCookie, destroyCookie } from "nookies";

// Types
import type { IUser } from "../interface/user";

// Api
import { tokenRequest } from "../pages/api/user/token";
import { userLogin } from "../pages/api/user/login";

// Redux Store
import { store } from "../redux/store";
import { setUser } from "../redux/slices/user/userSlice";

type signInType = {
   email: string;
   password: string;
}

type AuthContextType = {
   signIn: ({ email, password }: signInType) => Promise<{
      data: IUser;
      error: false;
  } | {
      error: boolean;
      message: undefined;
  } | {
      error: boolean;
      message: string | undefined;
  }>
};

export const AuthenticationContext = createContext({} as AuthContextType)

type Props = {
   children: ReactNode
};

const authProvider = ({ children }: Props) => {   
   const { token } = parseCookies();
   const calledUserData = React.useRef(false)

   useEffect(() => {
      if (token && !calledUserData.current) {
         calledUserData.current = true
         const autoLogin = async () => {
            try {
               const response = await userLogin(token);
               if (response.error) throw new Error("Um erro aconteceu");
               store.dispatch(setUser({ data: response.data! })) 
            } catch (err) {
               destroyCookie(null, "token")
            }
         }
         autoLogin();
      }
   }, [])

   const signIn = async ({ email, password }: signInType) => {
      const { token, error, message } = await tokenRequest({ email, password });

      if (!error && token) {
         const response = await userLogin(token);
         if (!response.error && response.data) {
            store.dispatch(setUser({ data: response.data }))
            setCookie(null, "token", token, {
               maxAge: 60 * 60 * 1, // Ten Hours
               path: "/"
            })
            Router.push("/dashboard");
            return { error: false }

         } else {
            return response
         }
      } else {
         return { error: true, message } 
      }
   }
   
   return (
      <AuthenticationContext.Provider value={{ signIn }}>
         {children}
      </AuthenticationContext.Provider>
   )
}
export default authProvider;