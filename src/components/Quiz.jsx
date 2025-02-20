import { useState } from "react";
import questions from "../questions.json";
import useQuizTimer from "../hook/useQuizTimer";
import { useNavigate } from "react-router-dom";
import { saveAttempt } from "../db";

function Quiz() {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  // Use the custom hook for the timer
  const timeLeft = useQuizTimer(
    currentQuestion,
    setCurrentQuestion,
    questions,
    setFeedback,
    selectedAnswer,
  );

  const handleAnswer = (option) => {


    if (timeLeft === 0) return; // Prevents answering if time is up

    setSelectedAnswer(option);

    let updatedScore = score;
    if (option === questions[currentQuestion].answer) {
      updatedScore = score + 1;
      setScore(updatedScore);

      const positiveFeedbacks = [
        "🎉 Great job!",
        "🔥 Nailed it!",
        "💯 Perfect!",
        "✅ Spot on!",
        "👏 Well done!",
      ];
      setFeedback(
        positiveFeedbacks[Math.floor(Math.random() * positiveFeedbacks.length)]
      );
    } else {
      const negativeFeedbacks = [
        "😬 Oops! Try the next one!",
        "❌ Not quite! You got this!",
        "🤔 Close, but not the right one!",
        "😓 Almost! Keep going!",
        "💪 Don't worry, you'll get the next one!",
      ];
      setFeedback(
        negativeFeedbacks[Math.floor(Math.random() * negativeFeedbacks.length)]
      );
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setFeedback("");
      } else {
        // ✅ Save quiz attempt AFTER last question is answered
        saveAttempt({
          date: new Date().toISOString(),
          score: updatedScore,
          total: questions.length,
        });
        // Navigate to results page when quiz is finished
        navigate("/results", {
          state: { score: updatedScore, total: questions.length },
        });
      }
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h2 className="text-2xl mb-4">{questions[currentQuestion].question}</h2>
      <p className="text-sm mb-2">⏳ Time Left: {timeLeft}s</p>
      <div className="flex flex-col">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`py-2 px-4 m-2 rounded ${
              selectedAnswer === option
                ? "bg-gray-500"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-4 text-lg">{feedback}</p>
    </div>
  );
}

export default Quiz;
