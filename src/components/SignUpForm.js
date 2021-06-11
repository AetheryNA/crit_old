const SignUpForm = () => {
  return (
    <>
      <form action="" className="sign-up-form">
        <div className="sign-up-form__input-field">
          <label>Username</label>
          <input type="textbox" id="username-sign-up"></input>
        </div>
        
        <div className="sign-up-form__input-field">
          <label>Password</label>
          <input type="textbox" id="password-sign-up"></input>
        </div>

        <div className="sign-up-form__input-field">
          <label>Confirm Password</label>
          <input type="textbox" id="confirm-password-sign-up"></input>
        </div>

        <div className="sign-up-form__input-field">
          <label>Email</label>
          <input type="textbox" id="password-sign-up"></input>
        </div>

        <div className="sign-up-form__submit-field">
          <button className="sign-up-form__button button">
            <span> Sign Up </span>
          </button>
        </div>
      </form>
    </>
  )
}

export default SignUpForm
