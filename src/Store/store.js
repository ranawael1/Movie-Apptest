import { createStore, applyMiddleware} from "redux"
import reducer from "./reducers/CombineReducers"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

const store = createStore(reducer, 
    // the composer, rap the application on it 
    composeWithDevTools(applyMiddleware(thunk)))

export default store