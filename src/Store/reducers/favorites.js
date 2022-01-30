import { removeFav } from "../actions/favorites"

const INITIAL_VALUE = {
    favMovies: [],
    counter: 0,
}
export default function favoritesReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case "ADD-FAVORITES":
            //console.log(action.payload,"from")
            let add = state.favMovies.concat(action.payload)
            return {
                ...state,
                favMovies: add,
                counter: add.length,
            
            }
            
        case "REMOVE-FAVORITES":
            const index = state.favMovies.map((movie)=> movie.id).indexOf(action.payload.id)
            let remove = state.favMovies.filter((item, id)=>id !== index )
            return {
                ...state,
                favMovies: remove,
                counter: remove.length
            }
        default:
            return state

            
    }
    
}