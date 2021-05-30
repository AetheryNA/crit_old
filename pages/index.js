import Head from 'next/head'
import Login from './Login/Index'

const Home = () => {
  return (
    <>
      <Head>
        <title>CRIT</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Login />
    </>
  )
}

export default Home
