import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // Reset timer when question changes
  useEffect(() => {
    setTimeRemaining(10);
  }, [question]);

  // Countdown effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        setTimeRemaining(10);
        onAnswered(false);
      }
    }, 1000);

    // cleanup
    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]);

  function handleAnswerClick(index) {
    const isCorrect = index === question.correctIndex;
    onAnswered(isCorrect);
    setTimeRemaining(10); // reset for next question
  }

  return (
    <div className="question">
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={answer}>
            <button onClick={() => handleAnswerClick(index)}>{answer}</button>
          </li>
        ))}
      </ul>
      <h3>Time Remaining: {timeRemaining}</h3>
    </div>
  );
}

export default Question;
