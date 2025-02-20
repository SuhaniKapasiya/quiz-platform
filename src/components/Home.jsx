import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
   const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Interactive Quiz Platform</h1>
      <Link to="/quiz">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Quiz
        </button>
      </Link>

      <button
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded"
        onClick={() => navigate("/history")}
      >
        Past Quiz Attempts
      </button>
    </div>
  );
}

export default Home;
