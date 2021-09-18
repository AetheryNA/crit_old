import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import axios from 'axios';
import questions from '../helpers/quizQuestions';
import QuizCompleteModel from './QuizCompleteModel';

const QuizForm = ({ loggedUser }) => {
  const [q1, setq1] = useState()
  const [q2, setq2] = useState()
  const [q3, setq3] = useState()
  const [open, setOpen] = useState(false)
  const [responseData, setResponseData] = useState()

  SwiperCore.use([Navigation])

  const submitResults = async(e) => {
    e.preventDefault()
    
    if (q1, q2, q3) {
      const data = {
        user_id : loggedUser.id,
        q1 : q1,
        q2 : q2,
        q3 : q3,
      }

      axios
        .post(`${process.env.BASE_URL}/api/personality`, data)
        .then(res => {
          setResponseData(res.data)
          setOpen(true)
        })
    }
  }

  return (
    <>
    { open && (<QuizCompleteModel response={responseData} />) }

    <Swiper navigation={true} className="quiz-slideshow">
      <SwiperSlide className="quiz-slide">
        <div className="quiz-form">
          <div className="quiz-form__header">
            <h3> {questions[0].question} </h3>
            <p> Select 1 of the options below </p>
          </div>

          <div className="quiz-form__buttons">
            <input type="radio" name={questions[0].input_name} id={questions[0].input_ids[0]} onChange={e => setq1(0)}/>
            <label className="quiz-form__answer" htmlFor={questions[0].input_ids[0]}> {questions[0].answer_add_0} </label> 
            
            <input type="radio" name={questions[0].input_name} id={questions[0].input_ids[1]} onChange={e => setq1(1)}/>
            <label className="quiz-form__answer" htmlFor={questions[0].input_ids[1]}> {questions[0].answer_add_1} </label> 

            <input type="radio" name={questions[0].input_name} id={questions[0].input_ids[2]} onChange={e => setq1(2)}/>
            <label className="quiz-form__answer" htmlFor={questions[0].input_ids[2]}> {questions[0].answer_add_2} </label> 
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="quiz-slide">
        <div className="quiz-form">
          <div className="quiz-form__header">
            <h3> {questions[1].question} </h3>
            <p> Select 1 of the options below </p>
          </div>

          <div className="quiz-form__buttons">
            <input type="radio" name={questions[1].input_name} id={questions[1].input_ids[0]} onChange={e => setq2(0)}/>
            <label className="quiz-form__answer" htmlFor={questions[1].input_ids[0]}> {questions[1].answer_add_0} </label> 

            <input type="radio" name={questions[1].input_name} id={questions[1].input_ids[1]} onChange={e => setq2(1)}/>
            <label className="quiz-form__answer" htmlFor={questions[1].input_ids[1]}> {questions[1].answer_add_1} </label> 

            <input type="radio" name={questions[1].input_name} id={questions[1].input_ids[2]} onChange={e => setq2(2)}/>
            <label className="quiz-form__answer" htmlFor={questions[1].input_ids[2]}> {questions[1].answer_add_2} </label> 
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="quiz-slide">
        <div className="quiz-form">
          <div className="quiz-form__header">
            <h3> {questions[2].question} </h3>
            <p> Select 1 of the options below </p>
          </div>

          <div className="quiz-form__buttons">
            <input type="radio" name={questions[2].input_name} id={questions[2].input_ids[0]} onChange={e => setq3(0)}/>
            <label className="quiz-form__answer" htmlFor={questions[2].input_ids[0]}> {questions[2].answer_add_0} </label>

            <input type="radio" name={questions[2].input_name} id={questions[2].input_ids[1]} onChange={e => setq3(1)}/>
            <label className="quiz-form__answer" htmlFor={questions[2].input_ids[1]}> {questions[2].answer_add_1} </label> 

            <input type="radio" name={questions[2].input_name} id={questions[2].input_ids[2]} onChange={e => setq3(2)}/>
            <label className="quiz-form__answer"  htmlFor={questions[2].input_ids[2]}> {questions[2].answer_add_2} </label> 
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="quiz-form__btn-wrap">
      <button className={`quiz-form__submit-btn button button--primary ${q1, q2, q3 == undefined ? 'disabled' : ''}`} onClick={submitResults}> Submit </button>
    </div>
    </>
  )
}

export default QuizForm
