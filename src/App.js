import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
