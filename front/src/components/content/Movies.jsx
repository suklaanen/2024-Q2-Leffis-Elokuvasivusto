import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '@styles/GroupView.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [page, setPage] = useState(1);
  const [keywords, setKeywords] = useState('');
  const [year, setYear] = useState('');
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
            genre: genre,
            page: page,
            year: year,
            keywords: keywords
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

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleKeywordsChange = (event) => { 
    setKeywords(event.target.value);
  };

  const handleSearch = () => {
    search();
  };


    return (
      <>
      <h2>Leffishaku</h2>

      <p className="info">Löydä elokuvia ja sarjoja eri parametreillä tai etsi nimellä. <br/>
      Annetaan enintään 20 hakutulosta per. sivu.</p>


      <div class="group-view">

        <div class="group-view-item-left">
          <b>Hae nimellä:</b>
          <div>
            <input
              className="field longInput"
              type="text"
              placeholder="..."
              value={query}
              onChange={handleInputChange}
            />
          </div>
          <div>
              <button onClick={handleSearch}>Hae</button>
          </div>
        </div>
        <div class="group-view-item-right">
          <div>

            <div className="flex">
              <div className="pdd-right">
                <b>Valitse genre:</b><br/>
                <select value={genre} onChange={handleGenreChange}>
                  <option value="">Kaikki</option>
                  <option value="action">Toiminta</option>
                  <option value="comedy">Komedia</option>
                  <option value="drama">Draama</option>
                  <option value="horror">Kauhu</option>
                  <option value="romance">Romantiikka</option>
                  <option value="thriller">Jännitys</option>
                  <option value="scifi">Scifi</option>
                  <option value="fantasy">Fantasia</option>
                  <option value="documentary">Dokumentti</option>
                  <option value="animation">Animaatio</option>
                  <option value="family">Perhe</option>
                  <option value="mystery">Mysteeri</option>
                  <option value="crime">Rikos</option>
                  <option value="adventure">Seikkailu</option>
                  <option value="history">Historia</option>
                  <option value="war">Sota</option>
                  <option value="music">Musiikki</option>
                  <option value="western">Lännenelokuva</option>
                  <option value="tv">TV-sarja</option>
                </select>
              </div>
                
              <div className="pdd-right">
                <b>Sivunumero:</b><br/>
                <input
                  className="field shortInput"
                  type="integer"
                  placeholder="..."
                  value={page}
                  onChange={handlePageChange}
                />
              </div>

              <div className="pdd-right">
                <b>Vuosi:</b><br/>
                <input
                  className="field shortInput"
                  type="integer"
                  placeholder="..."
                  value={year}
                  onChange={handleYearChange}
                />
              </div>

            </div>
            <div>
                <button onClick={handleSearch}>Hae</button>
              </div>
          </div>
        </div>
      </div>

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