import React, { useState } from "react";
import Questions from "./Questions.json"

const questions = Questions;

console.log(questions[0])



function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [ques, setQues] = useState(1)
  const varOcg = "This is a required variable"; 


  const handleAnswerChange = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer!");
      return;
    }

    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer;
    setFeedback(isCorrect ? "Correct!" : "Incorrect!");

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
    }

    setSelectedAnswer(null);

    setQues(ques + 1);
  };

 

  return (

    
    <div className="quiz-container">
      
      {!quizComplete ? (
        <div className="quiz-card">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  id={`option${index + 1}`} // Assign unique ID
                  onChange={handleAnswerChange}
                  checked={selectedAnswer === index}
                />
                {option}
              </label>
            ))}
          </div>
          <p>{ques}/{questions.length}</p>
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
          <button>Reset</button>
          
        
          {feedback && <p className="feedback">{feedback}</p>}
        </div>
      ) : (
        <div className="result-card">
          <h2>Quiz Complete!</h2>
          <p>
            You scored {score} out of {questions.length}!
          </p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
