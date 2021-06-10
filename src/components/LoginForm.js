const LoginForm = () => {
  return (
    <form className="login-form">
      <h3 className="login-form__head mobile--hidden "> Login </h3>
      <p className="login-form__catchphrase mobile--hidden"> Gamers are waiting for you. Login already.</p>

      <div className="login-form__username">
        <label>Username</label>
        <input type="textbox" id="username-login"></input>
      </div>
      
      <div className="login-form__password">
        <label>Password</label>
        <input type="textbox" id="password-login"></input>
        <p>Forgot password?</p>
      </div>

      <div className="login-form__submit">
        <p className="login-form__sign-up"> Not a member?<a href="/signup"> Sign up </a></p>

        <button className="login-form__button">
          <span> Login </span>
        </button>
      </div>
    </form>
  )
}

export default LoginForm
