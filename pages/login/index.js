import { useEffect } from 'react'
import Image from 'next/image'
import LoginForm from '../../src/components/LoginForm'
import Head from 'next/head'

const Login = () => {
  const handleLogin = () => {
    const username = document.querySelector("#username-login").value
    const password = document.querySelector("#password-login").value
  }

  useEffect(() => {
    const getData = async() => {
      const res = await fetch("http://localhost:5000/users")
      const data = await res.json()

      console.log(data)
    }

    getData()
  }, [])

  return (
    <>
      <Head>
        <title> CRIT | Login </title>
      </Head>

      <div className="login">
        <div className="login__container--intro">
          <Image 
            className="login__logo"
            src="/img/crit.svg"
            alt="Crit"
            width={170}
            height={80}
          />

          <p className="login__slogan raleway"> Being Social with Gamers </p>
        </div>

        <div className="login__container--form">
          <LoginForm handleLogin={handleLogin}/>
        </div>
      </div>
    </>
  )
}

export default Login
