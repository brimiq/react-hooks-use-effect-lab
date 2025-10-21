import React, { useState } from "react";
import questions from "./questions";
import Question from "./Question";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswered(isCorrect) {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Move to next question after 1 second
    setTimeout(() => {
      const next = currentIndex + 1;
      if (next < questions.length) {
        setCurrentIndex(next);
      } else {
        alert(`Quiz complete! Your score: ${score + (isCorrect ? 1 : 0)}/${questions.length}`);
        setCurrentIndex(0);
        setScore(0);
      }
    }, 1000);
  }

  const question = questions[currentIndex];

  return (
    <div className="App">
      <h1>React Trivia</h1>
      <Question
        question={question}
        onAnswered={handleAnswered}
      />
      <h3>Score: {score}</h3>
    </div>
  );
}

export default App;
