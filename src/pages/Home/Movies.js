import { React, useEffect } from 'react';
import Arrows from '../../components/Arrows/Arrows';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons"
import {faStar as star} from '@fortawesome/free-regular-svg-icons'
import { useHistory, useParams } from "react-router-dom"
import "./Movies.css"
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { setLoader } from '../../Store/actions/loader';
import { addFav,removeFav } from '../../Store/actions/favorites';
import { addMovies } from '../../Store/actions/movies';
import "../../components/Theme/Theme.css"
function Movies(props) {
    const isloading = useSelector(state => state.loader.isloading)
    const favorites = useSelector(state=> state.favorites.favMovies)
    const movies =useSelector(state=> state.movies.list)
    const theme = useSelector(state=>state.theme.theme)
    const dispatch = useDispatch()
    const params = useParams()
    const history = useHistory()
    let check = params.page
    let page = params.page ? params.page : '1'
    if (isNaN(check) && check != null) {
        history.push("/Notfound/404")
    }
    useEffect(()=>{
        dispatch(addMovies(page))
        dispatch(setLoader(false))
    }, [])
    useEffect(()=>{
        dispatch(addMovies(page))
        dispatch(setLoader(false))
    }, [page])
    return (
        <>
            {isloading ? <Loader /> :
            <>
            <div className='row' style={{height:"100%"}}>  
            {Object.keys(movies).map((movie, index) => {
                    return (

                        <div className={'col-8 offset-2 offset-sm-0 col-sm-6 col-md-4 col-lg-3 moviesDiv '+ (theme==="light"? "theme":"theme2")} key={index}>
                            {favorites.map((ob)=>ob.id).indexOf(movies[movie].id) > -1?
                            <FontAwesomeIcon className='favorSatr' icon={faStar} size="2x" onClick={()=>dispatch(removeFav(movies[movie]))}/>
                            :
                            <FontAwesomeIcon className='favorSatr' icon={star} size="2x" onClick={()=>dispatch(addFav(movies[movie]))}/>
                            }
                            <img src={`https://image.tmdb.org/t/p/w500/${movies[movie].poster_path}`} className='movieImage'></img>
                            <h6 className='title'>{movies[movie].title}</h6>
                            <p className='rate'>rate: {movies[movie].vote_average} <FontAwesomeIcon icon={faStar} /> </p>
                            <Link key={index} to={`/details/${movies[movie].id}`}>
                                <button type="submit" className="btn btn-success SignupButton" name="button" >Show details</button>
                            </Link>
                        </div>
                    )
                })} 
            </div>
            <Arrows history={history} page={page} />
          </>
           } 
        </>
    );
}

export default Movies;