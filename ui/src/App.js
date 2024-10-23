import './App.css';
import AuthPage from './authPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavouriteMovies from './favouriteMovies';
import ProfilePage from './profile';
import FavouritePeople from './FavouritePeople';
import ToWatch from './ToWatch';
import AddNew from './addNew';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/favourite-movies" element = {<FavouriteMovies/>} />
      <Route path="/favourite-people" element = {<FavouritePeople/>} />
      <Route path="/profile" element =  {<ProfilePage/>} />

      <Route path="/to-watch" element = {<ToWatch/>}/>
      <Route path="/add-new" element = {<AddNew/>} /> 
    </Routes>
  </Router>
  );
}

export default App;
