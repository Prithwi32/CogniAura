import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import ASDForm from './pages/ASDForm'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/predictASD" element={<ASDForm/>}/>
      </Routes>
    </Router>
  )
}

export default App
