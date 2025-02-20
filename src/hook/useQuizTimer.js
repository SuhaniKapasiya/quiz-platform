import { useState, useEffect } from "react";

const useQuizTimer = (
  currentQuestion,
  setCurrentQuestion,
  questions,
  setFeedback,
  selectedAnswer
) => {
  const [timeLeft, setTimeLeft] = useState(30);

  // Effect to reset the timer when the question changes

  useEffect(() => {
    setTimeLeft(30);
  }, [currentQuestion]);

  // Effect to start the countdown timer

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1); // Decrease timeLeft by 1 every second
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && selectedAnswer === null) {
      // Ensures an answer wasn’t selected manually
      setFeedback("⏳ Time's up!");

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1); // Move to the next question if available
        }
        setFeedback("");
      }, 1000);
    }
  }, [timeLeft]);

  return timeLeft;
};

export default useQuizTimer;
