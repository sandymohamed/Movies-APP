import { combineReducers } from "redux"
import addIdReducer from "./addIdReducer"
import favListReducer from "./favListReducer"


export default combineReducers({
    favList: favListReducer,
    moviesIds : addIdReducer
})
