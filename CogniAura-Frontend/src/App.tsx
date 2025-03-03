import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/HomePage";
// import Resources from "./pages/Resources";
// import ComingSoon from "./pages/ComingSoon";
// import AboutUs from "./pages/AboutUs";
import ASDForm from './pages/ASDForm'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/resources" element={<Resources />} />
        <Route path="/assessment" element={<ComingSoon />} />
        <Route path="/activities" element={<ComingSoon />} />
        <Route path="/aboutus" element={<AboutUs />} /> */}
        <Route path="/predictASD" element={<ASDForm/>}/>
      </Routes>
    </Router>
  );
};

export default App;