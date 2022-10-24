import { createStore ,applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import combineReducers from './reducers/compineReducers'
import thunk from "redux-thunk";



const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))


// const composeEnhancers =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(favListReducer , composeEnhancers );


export default store