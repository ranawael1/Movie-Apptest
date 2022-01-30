import {useContext, useState} from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {useSelector} from "react-redux"
import { language } from '../../Context/language';
import "./Navbar.css"
import Theme from '../Theme/Theme';
function Navbar(props) {
    const {lang, setLang} = useContext(language)
    console.log(lang)
    let history = useHistory()
    const [data, setData] = useState({
        search: null

    })
    const onChange = (e) => {
        setData({
            ...data,
            search: e.target.value
        })
    }
    const theme = useSelector(state=>state.theme.theme)
   

    return (
        <>
            <nav className={"navbar navbar-expand-lg " + (theme== "light"? "navbar-light bg-light":"navbar-dark bg-dark") + " px-5 fixed-top"}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.movie}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favorites">Favorites {useSelector(state=>state.favorites.counter)}</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link language" onMouseEnter={()=>setLang("English")} onMouseLeave={()=>setLang("EN")>{lang}}>{lang}</span>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" onChange={(e)=>onChange(e)} aria-label="Search" name="search"/>
                            <Link to={`/search/${data.search}`} >
                                 <button className="btn btn-outline-success" style={{borderRadius: "50%"}}><FontAwesomeIcon icon={faSearch} /> </button>

                            </Link>
                        </form>
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 pb-0">
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                                </ul>
                               
                               

                            </li>
                            <li className="nav-item">
                                <span className="nav-link language" > <Theme/></span>
                            </li>
                        </ul>
                        
                        
                    </div>
                </div>
            </nav>           
        </>
    );
}

export default Navbar;