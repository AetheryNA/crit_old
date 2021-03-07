import styles from '../../styles/screens/login.module.scss'
import Image from 'next/image'

export default function Login() {
  return (
    <div className={styles.login}>
      <div className="container login__container--intro">
        {/* Mobile Elements */}
        <Image 
          className="login__logo"
          src="/crit.svg"
          alt="Crit"
          width={170}
          height={80}
        />

        <p className="login__slogan raleway"> Being Social with Gamers </p>
      </div>

      <div className="container login__container--form">
        <div className="login__form">
          <h3 className="mobile--hidden login__head"> Login </h3>
          <p className="mobile--hidden raleway login__catchphrase"> Gamers are waiting for you. Login already.</p>

          <div className="login__username">
            <label>Username</label>
            <input type="textbox" id="username-login" placeholder="Username"></input>
          </div>
          
          <div className="login__password">
            <label>Password</label>
            <input type="textbox" id="password-login" placeholder="Password"></input>
            <p className="raleway">Forgot password?</p>
          </div>

          <div className="login__submit">
            <p className="raleway login__submit-button"> Not a member?<span> Sign up </span></p>

            <div className="login__button">
              <span> Login </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}