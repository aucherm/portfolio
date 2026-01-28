import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetInTouch from "./pages/GetInTouch";
import Myself from "./pages/Myself";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/getintouch" element={<GetInTouch />} />
      <Route path="/myself" element={<Myself />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
