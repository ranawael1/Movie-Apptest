import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faStar} from "@fortawesome/free-solid-svg-icons"
import {useSelector, useDispatch} from "react-redux"
import { removeFav } from '../../Store/actions/favorites';
import {Link} from "react-router-dom"
import "./Favorites.css"


function Favorites(props) {
    const theme = useSelector(state=>state.theme.theme)
    const movies = useSelector((state) => state.favorites.favMovies);
    const dispatch = useDispatch()

    return (
        <>
              
            
                  
                
            <div className='row'>  
            {Object.keys(movies).map((movie, index) => {
                    return (

                        <div className={'col-8 offset-2 offset-sm-0 col-sm-6 col-md-4 col-lg-3 moviesDiv '+ (theme==="light"? "theme":"theme2")} key={index}>
                            <FontAwesomeIcon className='trash' icon={faTrash} size="lg" onClick={()=>dispatch(removeFav(movies[movie]))}/>
                            <img src={`https://image.tmdb.org/t/p/w500/${movies[movie].poster_path}`} className='movieImage'></img>
                            <h5 className='title'>{movies[movie].title}</h5>
                            <p className='rate'>rate: {movies[movie].vote_average} <FontAwesomeIcon icon={faStar} /> </p>
                            <Link key={index} to={`/details/${movies[movie].id}`}>
                                <button type="submit" className="btn btn-success SignupButton" name="button" >Show details</button>
                            </Link>
                        </div>
                    )
                })} 
            </div>
        </>
    );
}

export default Favorites;