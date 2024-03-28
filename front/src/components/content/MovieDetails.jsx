import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/movie/find/${id}`);
        console.log(response.data); 
        setMovie(response.data);

        setBackgroundImage(movie.poster);
      } catch (error) {
        console.error('Hakuvirhe:', error);
      }
    };
    
    search();
  }, [id]);

  return (
    <div className="page">

        <div className="movie-details">
      {movie && (
        <>
        <img src={movie.poster} alt={movie.title} /> 
            <p><h2>{movie.title}</h2></p>
            <p>Kuvaus:</p>
            <p>{movie.description}</p>
            <p>Genre: {movie.genre}</p>
            <p>Julkaistu: {movie.year}</p>
            <p>{movie.language}</p>
        </>
      )}
      </div>
    </div>

  );
};

export default MovieDetails;