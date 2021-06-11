import Head from 'next/head'
import SignUpForm from '../../src/components/SignUpForm'

const SignUp = () => {
  return (
    <>
      <Head>
        <title> CRIT | Sign up </title>
      </Head>

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

export default SignUp
