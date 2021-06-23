import Image from 'next/image'

import LayoutAuth from '../../src/components/layouts/LayoutAuth'
import QuizForm from '../../../src/components/QuizForm'

const Quiz = () => {
  return (
    <>
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
