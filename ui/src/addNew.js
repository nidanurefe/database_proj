import React, { useState } from 'react';
import './styles/addNew.css';
import Layout from './layout';

const AddNew = () => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    releaseDate: '',
    director: '',
    rating: '',
  });

  const [actor, setActor] = useState({
    name: '',
    birthdate: '',
    nationality: '',
    famousMovies: '',
  });

  return (
    <Layout>
    <div className="add-new-container">
      <h2>Add Movie and Actor</h2>
      <div className="form-wrapper">
        {/* Movie Form */}
        <form className="form movie-form">
          <h3>Movie Details</h3>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Movie Title"
            value={movie.title}
            onChange={(e) => setMovie({ ...movie, title: e.target.value })}
            required
          />
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={movie.genre}
            onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
            required
          />
          <label>Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={(e) => setMovie({ ...movie, releaseDate: e.target.value })}
          />
          <label>Director</label>
          <input
            type="text"
            name="director"
            placeholder="Director"
            value={movie.director}
            onChange={(e) => setMovie({ ...movie, director: e.target.value })}
          />
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={movie.rating}
            onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
          />
          <button type="submit">Save Movie</button>
        </form>

        {/* Actor Form */}
        <form className="form actor-form">
          <h3>Actor Details</h3>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Actor Name"
            value={actor.name}
            onChange={(e) => setActor({ ...actor, name: e.target.value })}
            required
          />
          <label>Birthdate</label>
          <input
            type="date"
            name="birthdate"
            value={actor.birthdate}
            onChange={(e) => setActor({ ...actor, birthdate: e.target.value })}
          />
          <label>Nationality</label>
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={actor.nationality}
            onChange={(e) => setActor({ ...actor, nationality: e.target.value })}
          />
          <label>Famous Movies</label>
          <textarea
            name="famousMovies"
            placeholder="Famous Movies"
            value={actor.famousMovies}
            onChange={(e) => setActor({ ...actor, famousMovies: e.target.value })}
          />
          <button type="submit">Save Actor</button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default AddNew;
