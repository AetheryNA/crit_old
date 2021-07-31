import LayoutAuth from '../../src/components/layouts/Auth'
import SignUpForm from '../../src/components/SignUpForm'
import useUser from '../../lib/auth/useUser'

const SignUp = () => {
  return (
    <>
      <div className="sign-up">
        <div className="sign-up__container">
          <div className="sign-up__header">
            <h3> Sign up </h3>
            <p> Gamers are waiting for you! Sign up! </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </>
  )
}

SignUp.layout = LayoutAuth

export default SignUp
