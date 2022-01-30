const INITIAL_VALUE = {
    isloading: true
}
export default function loaderReducer(state = INITIAL_VALUE, action){
    switch(action.type){
        case "SET_LOADER":
            return{
                ...state,
                isloading: action.payload
            }
        default:
            return state
    }
}