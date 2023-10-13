import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
