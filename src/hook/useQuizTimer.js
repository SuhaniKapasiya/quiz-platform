import { useState, useEffect } from "react";

const useQuizTimer = (
  currentQuestion,
  setCurrentQuestion,
  questions,
  setFeedback
) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft === 0) {
      setFeedback("⏳ Time's up!");
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setTimeLeft(30);
          setFeedback("");
        }
      }, 1000);
    }
  }, [timeLeft]);

  return timeLeft;
};

export default useQuizTimer;
