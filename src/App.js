import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import History from "./components/History ";

function App() {
  return (
    <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/history" element={<History />} />
        </Routes>
   
    </BrowserRouter>
  );
}

export default App;
