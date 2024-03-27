import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    search();
  }, []); 

  const search = async () => {
    try {
      const response = await axios.get('http://localhost:8080/movie/search', {
        params: {
          query: query
        }
      });
      console.log(response.data); 
      setMovies(response.data); 
    } catch (error) {
      console.error('Hakuvirhe:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

    return (
      <>
      <h2>Leffishaku</h2>

      <label>
      Hae elokuvaa tai sarjaa:
      <input
        className="field"
        type="text"
        placeholder="..."
        value={query}
        onChange={handleInputChange}/>
      </label>

      <button onClick={search}>Hae</button>

      <div className="movie-container">
        {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <Link to={`/movie/${movie.id}`}>
          <img src={movie.poster} alt={movie.title} />
          </Link>
        </div>
        ))}
      </div>
      </>
  );
};

export default Movies;