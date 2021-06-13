import Head from 'next/head'
import Image from 'next/image'

import QuizForm from '../../../src/components/QuizForm'

const Quiz = () => {
  return (
    <>
      <Head>
        <title> CRIT | Quiz </title>
      </Head>

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

export default Quiz
