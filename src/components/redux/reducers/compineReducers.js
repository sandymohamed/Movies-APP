import { combineReducers } from "redux"
import addIdReducer from "./addIdReducer"
import favListReducer from "./favListReducer"
import LoaderReducer from "./loaderReducer"
import TrendsMoviesReducer from "./trendsMoviesReducers"


export default combineReducers({
    favList: favListReducer,
    moviesIds : addIdReducer,
    trends : TrendsMoviesReducer,
    loader: LoaderReducer
})
