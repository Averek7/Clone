import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from "./requests";
import './Banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://api.themoviedb.org/3";

    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(baseUrl+requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;  
        }
        fetchData();
    },[]);

    function truncate(str, n){
        return str?.length > 0 ? str.substr(0,n-1) + '....' : str ;
    }

    return (
        <header className="banner"
            style={{ 
                backgroundSize: "cover",
                backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${movies?.backdrop_path}
                )`,
                backgroundPosition: "center center",
                
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies?.title || movies?.name || movies?.original}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movies?.overview, 250)}</h1>
            </div>

            <div className="banner_fadeButton"></div>
        </header>
    )
}
 
export default Banner
