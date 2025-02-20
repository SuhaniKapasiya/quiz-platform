import { useState, useEffect } from "react";
import { getAttempts } from "../db";
import { useNavigate } from "react-router-dom";

function History() {

  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {

    const fetchAttempts = async () => {

      const attempts = await getAttempts();
      console.log("History",attempts);
      
      setHistory(attempts);

    };

    fetchAttempts();
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h2 className="text-3xl">Past Quiz Attempts</h2>
      <ul className="mt-4">
        {history.map((attempt, index) => (
          <li key={index} className="text-lg">
            📅 {new Date(attempt.date).toLocaleString()} - Score:{" "}
            {attempt.score} / {attempt.total}
          </li>
        ))}
      </ul>

      <button
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded"
        onClick={() => navigate("/")}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default History;
