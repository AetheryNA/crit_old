import Head from 'next/head'
import useUser from '../lib/auth/useUser'
import { useEffect } from 'react'
import { useRouter } from "next/router"

const Home = () => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if(!user?.LoggedIn) {
      router.push('/trending')
    }
  })

  return (
    <>
      <Head>
        <title>CRIT</title>
      </Head>
    </>
  )
}

export default Home
