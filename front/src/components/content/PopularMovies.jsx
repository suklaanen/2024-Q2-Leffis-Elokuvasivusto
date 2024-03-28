import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const fetchPopularMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8080/movie/discover', {
                params: {
                    sort_by: 'popularity.desc'
                  }
            });
            const popularMovies = response.data.slice(0, 9);
            setMovies(popularMovies);
        } catch (error) {
            console.error('Hakuvirhe:', error);
        }
    };

    return (
        <div>
            <h2>Tämän hetken suosituimmat</h2>
            <div className="movie-container">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <Link to={'/movie/${movie.id}'}>
                            <img src={movie.poster} alt={movie.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularMovies;