import Image from 'next/image'
import LoginForm from '../../src/components/LoginForm'
import Head from 'next/head'

const Login = () => {
  return (
    <>
      <Head>
        <title> CRIT | Login </title>
      </Head>

      <div className="login">
        <div className="login__container--intro">
          <img src="/img/crit.svg" />

          <p className="login__slogan"> Being Social with Gamers </p>
        </div>

        <div className="login__container--form">
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default Login
