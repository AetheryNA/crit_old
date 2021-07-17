import { useState } from "react"

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userDetails = {
    username : username,
    password : password
  }

  const sendResponse = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/auth/loginUser', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userDetails),
    })
  }

  return (
    <form className="login-form" onSubmit={sendResponse}>
      <h3 className="login-form__head mobile--hidden"> Login </h3>
      <p className="login-form__catchphrase mobile--hidden"> Gamers are waiting for you. Login already.</p>

      <div className="login-form__username">
        <label htmlFor="username-login">Username</label>
        <input 
          type="textbox" 
          id="username-login" 
          onChange={(e) => {setUsername(e.target.value)}}
        />
      </div>
      
      <div className="login-form__password">
        <label htmlFor="password-login">Password</label>
        <input 
          type="password" 
          id="password-login" 
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <p>Forgot password?</p>
      </div>

      <div className="login-form__submit">
        <p className="login-form__sign-up"> Not a member?<a href="/signup"> Sign up </a></p>

        <button type="submit" className="login-form__button">
          <span> Login </span>
        </button>
      </div>
    </form>
  )
}

export default LoginForm
