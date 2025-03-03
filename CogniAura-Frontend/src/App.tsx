import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/HomePage";
import ASDForm from './pages/ASDForm'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predictASD" element={<ASDForm/>}/>
      </Routes>
    </Router>
  );
};

export default App;