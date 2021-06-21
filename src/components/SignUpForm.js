const SignUpForm = () => {
  return (
    <form className="sign-up-form">
      <div className="sign-up-form__input-field">
        <label htmlFor="username-sign-up">Username</label>
        <input type="textbox" id="username-sign-up"></input>
      </div>
      
      <div className="sign-up-form__input-field">
        <label htmlFor="password-sign-up">Password</label>
        <input type="password" id="password-sign-up"></input>
      </div>

      <div className="sign-up-form__input-field">
        <label htmlFor="confirm-password-sign-up">Confirm Password</label>
        <input type="password" id="confirm-password-sign-up"></input>
      </div>

      <div className="sign-up-form__input-field">
        <label htmlFor="email-sign-up">Email</label>
        <input type="email" id="email-sign-up"></input>
      </div>

      <div className="sign-up-form__submit-field">
        <button type="submit" className="sign-up-form__button button">
          <span> Sign Up </span>
        </button>
      </div>
    </form>
  )
}

export default SignUpForm
