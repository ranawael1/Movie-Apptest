import { useParams } from "react-router-dom"
import { React, useState, useEffect } from 'react';
import { AxiosInstance } from "../../Network/AxiosInstance";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./Movie.css"
import { useSelector } from "react-redux";
import "../../components/Theme/Theme.css"
function Movie(props) {
    const params = useParams()
    const theme = useSelector(state => state.theme.theme)
    const [movie, setMovie] = useState({})
    useEffect(() => {

        AxiosInstance.get(`/movie/${params.id}?api_key=addc24fa3de68655222e36f0796cadb2`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err))
    }, [])
    // let genres = movie.genres
    // let l =  {...genres.map((g,index)=> g[index].id)}
    console.log(movie)
    return (
        <div style={{ height: "100%" }}>
            <div className="row movieDiv">
                <div className="col-sm-12 col-md-5 flex">
                    <h2 className={'hidden '+ (theme === "light" ? "theme" : "theme2") }>{movie.title}</h2>

                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='movieImage'></img>

                </div>
                <div className={"col-sm-12 col-md-6 " + (theme === "light" ? "theme" : "theme2") + " display"}>
                    <h2 className='title hidden2'>{movie.title}</h2>
                    <p className='rate hidden2'> <FontAwesomeIcon icon={faStar} /> {movie.vote_average}  </p>
                    <p >{movie.overview}  </p>
                    <p>Release date: {movie.release_date} </p>
                    <p className='rate hidden'> <FontAwesomeIcon icon={faStar} /> {movie.vote_average}  </p>

                </div>

            </div>
        </div>
    );
}

export default Movie;