import './App.css';
import { Navbar, Home, LikePage } from "./components/index-components"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "liked" element = {<LikePage />} />
      </Routes>
    </div>
  );
}

export default App;
