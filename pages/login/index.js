import Image from 'next/image'
import LoginForm from '../../src/components/LoginForm'
import LayoutAuth from '../../src/components/layouts/LayoutAuth'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login__container">
          <Image 
            className="login__logo"
            src="/img/crit.svg"
            alt="Crit"
            width={170}
            height={80}
          />

          <p className="login__slogan"> Being Social with Gamers </p>
        </div>

        <div className="login__container">
          <LoginForm />
        </div>
      </div>
    </>
  )
}

Login.layout = LayoutAuth

export default Login
