import './App.css';
import AuthPage from './authPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Travelled from './travelled';
import ProfilePage from './profile';
import JourneyInsights from './journey_insights';
import FutureDestinations from './future_destinations';
import AddNew from './addNew';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/past-trips" element = {<Travelled/>} />
      <Route path="/profile" element =  {<ProfilePage/>} />
      <Route path="/future-destinations" element = {<FutureDestinations/>}/>
      <Route path="/journey-insights" element = {<JourneyInsights/>} />
      <Route path="/add-new" element = {<AddNew/>} /> 
    </Routes>
  </Router>
  );
}

export default App;
