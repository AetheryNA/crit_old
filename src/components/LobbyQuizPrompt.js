const LobbyQuizPrompt = () => {
  return (
    <div className="lobby-quiz-prompt">
      <p>
        {" "}
        Not taken the quiz yet? Take it now and help us determine the right
        lobbies you will like.{" "}
      </p>
      <a
        className="lobby-quiz-prompt__button button button--primary"
        href="/signup/quiz"
      >
        Take the personality quiz!
      </a>
    </div>
  );
};

export default LobbyQuizPrompt;
