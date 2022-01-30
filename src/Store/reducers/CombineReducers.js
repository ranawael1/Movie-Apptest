import {combineReducers} from "redux"
import favoritesReducer from "./favorites"
import languageReducer from "./language"
import loaderReducer from "./loader"
import moviesReducers from "./movies"
import themeReducer from "./theme"

export default combineReducers({
    language: languageReducer,     
    loader: loaderReducer,
    favorites: favoritesReducer,
    movies: moviesReducers,
    theme: themeReducer,
})