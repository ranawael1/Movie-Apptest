 const INITIAL_VALUE  ={
     list: []
 }
 export default function moviesReducers(state = INITIAL_VALUE, action){
     switch(action.type){
     case "GET_MOVIES":
         return{
             ...state,
             list: action.payload
         }
     default:
         return state
     }
 }