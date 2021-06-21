const QuizForm = () => {
  return (
    <form className="quiz-form">
      <div className="quiz-form__header">
        <h3> Question 1 </h3>
        <p> Select 1 of the options below </p>
      </div>

      <div className="quiz-form__buttons">
        <button className="quiz-form__answer"> Yes </button>
        <button className="quiz-form__answer"> No </button>
        <button className="quiz-form__answer"> Maybe </button>
        <button className="quiz-form__answer"> Idk </button>
      </div>
    </form>
  )
}

export default QuizForm
