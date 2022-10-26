import { SessionProvider, useSession, signIn } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import '../styles/theme.css'
import {SWRConfig} from 'swr'
import {useRouter} from 'next/router'
import Layout from '../Components/Layout/Layout'
import { ThemeProvider } from 'next-themes'





function MyApp({ Component,
  pageProps: { session, ...pageProps } }){


   
    
    useEffect(() => {
      import ('bootstrap/dist/js/bootstrap.js')
      }, []);

  return<SWRConfig value={{fetcher: (url) => axios.get(url).then(res => res.data)}}>
        
        
        <SessionProvider session={session} >
        
         
          <ThemeProvider>
          <Layout>
              {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
            </Layout>
            </ThemeProvider>
           
        </SessionProvider>
       
    </SWRConfig>
}

export default MyApp

export const Auth = ({ children }) => {

  const router = useRouter()
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    if (status === "loading") return
    if (!isUser) router.push('/auth/signin')
  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}
