const SignUpForm = () => {
  return (
    <>
      <form action="" className="sign-up-form">
        <div className="sign-up-form__input-field">
          <label for="username-sign-up">Username</label>
          <input type="textbox" id="username-sign-up"></input>
        </div>
        
        <div className="sign-up-form__input-field">
          <label for="password-sign-up">Password</label>
          <input type="password" id="password-sign-up"></input>
        </div>

        <div className="sign-up-form__input-field">
          <label for="confirm-password-sign-up">Confirm Password</label>
          <input type="password" id="confirm-password-sign-up"></input>
        </div>

        <div className="sign-up-form__input-field">
          <label for="email-sign-up">Email</label>
          <input type="email" id="email-sign-up"></input>
        </div>

        <div className="sign-up-form__submit-field">
          <button type="submit" className="sign-up-form__button button">
            <span> Sign Up </span>
          </button>
        </div>
      </form>
    </>
  )
}

export default SignUpForm
