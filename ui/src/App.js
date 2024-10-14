import './App.css';
import AuthPage from './authPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Travelled from './travelled';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/past-trips" element = {<Travelled/>} />

    </Routes>
  </Router>
  );
}

export default App;