import {useState, useEffect} from 'react';
import { useParams, useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AxiosInstance } from '../../Network/AxiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from "@fortawesome/free-solid-svg-icons"
import { faStar as star } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFav } from '../../Store/actions/favorites';
import { removeFav } from '../../Store/actions/favorites';
import "../Home/Movies.css"
function Search(props) {
    const params = useParams()
    const theme = useSelector(state=>state.theme.theme)
    const movies =useSelector(state=> state.movies.list)

    const dispatch = useDispatch()
    console.log(params)
    const [search, setSearch] = useState({})
    const favorites = useSelector(state=> state.favorites.favMovies)

    //const [searchValue, setSearchValue] = useState(params.name)
    
    useEffect(() => {
        
        AxiosInstance.get(`/search/movie?api_key=addc24fa3de68655222e36f0796cadb2&query={${params.name}}`)
            .then((res) => setSearch(res.data.results))
            .catch((err) => console.log(err))

    
    }, [])
    
    return (
        <div style={{height:"100%"}}>

        <div className='row'>  
            {Object.keys(search).map((movie, index) => {
                    return (

                        <div className={'col-8 offset-2 offset-sm-0 col-sm-6 col-md-4 col-lg-3 moviesDiv '+ (theme==="light"? "theme":"theme2")} key={index}>
                            {favorites.map((ob)=>ob.id).indexOf(search[movie].id) > -1?
                            <FontAwesomeIcon className='favorSatr' icon={faStar} size="2x" onClick={()=>dispatch(removeFav(search[movie]))}/>
                            :
                            <FontAwesomeIcon className='favorSatr' icon={star} size="2x" onClick={()=>dispatch(addFav(search[movie]))}/>
                            }
                            <img src={`https://image.tmdb.org/t/p/w500/${search[movie].poster_path}`} className='movieImage'></img>
                            <h6 className='title'>{search[movie].title}</h6>
                            <p className='rate'>rate: {search[movie].vote_average} <FontAwesomeIcon icon={faStar} /> </p>
                            <Link key={index} to={`/details/${search[movie].id}`}>
                                <button type="submit" className="btn btn-success SignupButton" name="button" >Show details</button>
                            </Link>
                        </div>
                    )
                })} 
            </div>
            </div>
    );
}

export default Search;