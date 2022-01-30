import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Movies from './pages/Home/Movies';
import NotFound from './pages/NotFound/NotFound';
import Movie from './pages/Movie/Movie';
import Search from './pages/Search/Search';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import Favorites from './pages/Favorites/Favorites';
import { language } from './Context/language';
import { useState } from 'react';
function App() {
  const [lang, setLang] = useState("EN")
  const movie = "Movies"
  const theme = useSelector(state=>state.theme.theme)
  console.log(theme)
  return (
    <>
    <language.Provider value={{lang, setLang}}>
    <BrowserRouter>
    <div style={theme=="light"? {background: "white"}: {backgound:"black"}}>
    <Navbar movie={movie}/>
        <div className='container mt-5 py-5'style={{minHeight:"100vh"}} >
          <Switch>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/favorites"} component={Favorites} />
            <Route exact path={"/:page?"} component={Movies} />
            <Route exact path={"/search/:name?"} component={Search} />
            <Route exact path={"/details/:id"} component={Movie} />
            <Route path={"*"} component={NotFound}/>
          </Switch>
        </div>
    </div>
        
      </BrowserRouter>
      </language.Provider> 

    {/* </div> */}
      

    </>
  );
}

export default App;
