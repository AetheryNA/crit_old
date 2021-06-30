import { useState } from "react"

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState(null)
  const [errorAPI, setErrorAPI] = useState(null)
  
  const userParams = {
    username: username,
    password: password,
    email: email,
  }
  
  const handleRegister = async (e) => {
    e.preventDefault()

    if (password === passwordConfirm) {
      setErrorPassword(null)

      const response = await fetch('/api/auth/registerUser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userParams)
      })
  
      if (!response.ok) {
        console.log(response.status)
        setErrorAPI("The username or email provided has already been taken.")
      }
    } else {
      setErrorPassword("Passwords don't match!")
    }
  }

  return (
    <>
      <form className="sign-up-form" onSubmit={handleRegister}>
        {errorAPI || errorPassword !== null ? 
          <div className="sign-up-form__error-pop">
            <p> {errorAPI}{errorPassword} </p>
          </div>
          : null}

        <div className="sign-up-form__input-field">
          <label htmlFor="username-sign-up">Username</label>
          <input type="textbox" id="username-sign-up" className={errorAPI !== null ? `sign-up-form__error` : null} autoComplete="off" required onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        
        <div className="sign-up-form__input-field">
          <label htmlFor="password-sign-up">Password</label>
          <input type="password" id="password-sign-up" required onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <div className="sign-up-form__input-field">
          <label htmlFor="confirm-password-sign-up">Confirm Password</label>
          <input type="password" id="confirm-password-sign-up" className={errorPassword !== null ? `sign-up-form__error` : null} onChange={(e) => setPasswordConfirm(e.target.value)}></input>
        </div>

        <div className="sign-up-form__input-field">
          <label htmlFor="email-sign-up">Email</label>
          <input type="email" id="email-sign-up" className={errorAPI !== null ? `sign-up-form__error` : null} autoComplete="off" required onChange={(e) => setEmail(e.target.value)}></input>
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
