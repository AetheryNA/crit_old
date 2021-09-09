import Image from 'next/image'
import Head from 'next/head'

import LayoutAuth from '../../../src/components/layouts/Auth'
import QuizForm from '../../../src/components/QuizForm'
import QuizModel from '../../../src/components/QuizModel'

const Quiz = () => {
  return (
    <>
      <Head>
        <title> CRIT | Personality Quiz </title>
      </Head>

      <QuizModel />
      <div className="quiz">
        <div className="quiz__container">
          <QuizForm />

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

export default Quiz
