import Head from 'next/head'
import styles from '../styles/screens/dashboard.module.scss'
import Login from '../pages/login/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CRIT</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Login />

      {/* <header>
        <div className="container">
          <h1> Hello </h1>
        </div>
      </header>

      <main>
        <div className="container">
          <h2> Derp </h2>
        </div>
      </main> */}
    </div>
  )
}
