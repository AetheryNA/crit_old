import { useState } from "react"

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const userParams = {
    username: username,
    password: password,
    email: email,
  }
  
  const handleRegister = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/auth/registerUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userParams)
    })
  }

  return (
      <form className="sign-up-form" onSubmit={handleRegister}>
        <div className="sign-up-form__input-field">
          <label htmlFor="username-sign-up">Username</label>
          <input type="textbox" id="username-sign-up" autoComplete="off" onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        
        <div className="sign-up-form__input-field">
          <label htmlFor="password-sign-up">Password</label>
          <input type="password" id="password-sign-up" onChange={(e) => setPassword(e.target.value)}></input>
        </div>

      <div className="sign-up-form__input-field">
        <label htmlFor="confirm-password-sign-up">Confirm Password</label>
        <input type="password" id="confirm-password-sign-up"></input>
      </div>

        <div className="sign-up-form__input-field">
          <label htmlFor="email-sign-up">Email</label>
          <input type="email" id="email-sign-up" autoComplete="off" onChange={(e) => setEmail(e.target.value)}></input>
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
