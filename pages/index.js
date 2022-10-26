import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useSession, signOut} from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'



export default function Home() {

  const {data, status} = useSession()

  console.log('database', status)



  return (
    <main>
      {data.user.name}
       {status === 'authenticated' && <button onClick={()=>{signOut()}}>SignOut</button>}

       <Link href='/categories'>PROTECTED ROUTE</Link>

      
    </main>
  )
}

Home.auth = true;
