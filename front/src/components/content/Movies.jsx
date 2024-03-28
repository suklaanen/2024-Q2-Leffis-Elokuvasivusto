import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    search();
  }, [page]); 

  const search = async () => {
    try {
      let response;
      if (!query == '') {
        response = await axios.get('http://localhost:8080/movie/search', {
          params: {
            query: query,
            genre: genre,
            page: page
          }
        });
      } else {
        response = await axios.get('http://localhost:8080/movie/discover', {
          params: {
            query: query,
            genre: genre,
            page: page
          }
        });
      }
      console.log(response.data); 
      setMovies(response.data); 
    } catch (error) {
      console.error('Hakuvirhe:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleSearch = () => {
    search();
  };


    return (
      <>
      <h2>Leffishaku</h2>

      Hae elokuvaa tai sarjaa: <br/>
      <label>
      
      <input
        className="field"
        type="text"
        placeholder="..."
        value={query}
        onChange={handleInputChange}/>
      </label>
      

      <label>
        Valitse genre:
        <select value={genre} onChange={handleGenreChange}>
          <option value="">Kaikki</option>
          <option value="action">Toiminta</option>
          <option value="comedy">Komedia</option>
          {/* Lisää muut genret */}
        </select>
      </label>

      <label>
        Valitse sivu:
        <select value={page} onChange={handlePageChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          {/* Lisää muut sivut tarvittaessa */}
        </select>
      </label>

      <button onClick={handleSearch}>Hae</button>

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