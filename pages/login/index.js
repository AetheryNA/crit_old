import Image from 'next/image'
import LoginForm from '../../src/components/LoginForm'

const Login = () => {
  return (
    <div className="login">
      <div className="container login__container--intro">
        <Image 
          className="login__logo"
          src="/img/crit.svg"
          alt="Crit"
          width={170}
          height={80}
        />

        <p className="login__slogan raleway"> Being Social with Gamers </p>
      </div>

      <div className="container login__container--form">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
