import { useLocation, useNavigate } from "react-router-dom";

function Results() {


  const location = useLocation();
  const navigate = useNavigate();

  const { score, total } = location.state || { score: 0, total: 0 }; // Default values

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        
      <h2 className="text-3xl font-bold">Quiz Completed</h2>

      <p className="text-xl mt-4">
        Your Score: {score} / {total}
      </p>

      <button
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded"
        onClick={() => navigate("/")}
      >
        Restart Quiz
      </button>

      <button
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded"
        onClick={() => navigate("/history")}
      >
        Past Quiz Attempts
      </button>
    </div>
  );
}

export default Results;
