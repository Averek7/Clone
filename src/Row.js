import axios from 'axios';
import React, {useState, useEffect } from 'react'
import './Row.css'

const Row = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([]);
    const baseUrl = 'https://api.themoviedb.org/3';
    const imgUrl = 'https://image.tmdb.org/t/p/original/';
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(`${baseUrl}${fetchUrl}`);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row_posters">
                {
                    movies.map(movie => (
                        
                        <img key={movie.id} src={`${imgUrl}${movie.poster_path}`} alt={movie.name} className="row_poster" />
                    ))
                }
            </div>
        </div>
    )
}

export default Row
