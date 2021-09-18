import Image from 'next/image'
import Head from 'next/head'

import LayoutAuth from '../../../src/components/layouts/Auth'
import QuizForm from '../../../src/components/QuizForm'
import QuizModel from '../../../src/components/QuizModel'
import { withSessionSSR } from '../../../lib/auth/session'

const Quiz = ({ user }) => {
  return (
    <>
      <Head>
        <title> CRIT | Personality Quiz </title>
      </Head>

      <QuizModel />
      <div className="quiz">
        <div className="quiz__container">
          <QuizForm loggedUser={user} />

          <div className="quiz__image-container">
            <Image 
              className="quiz__logo"
              src="/img/crit.svg"
              alt="Crit"
              width={110}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  )
}

Quiz.layout = LayoutAuth

export const getServerSideProps = withSessionSSR(async function ({ req, res }) {
  const user = req.session.get('user')

  if (!user) {
    return {
      redirect : {
        destination : '/login'
      }
    }
  }

  return {
    props: { 
      user,
    },
  }
})

export default Quiz
