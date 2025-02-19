import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
