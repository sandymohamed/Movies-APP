import { createStore } from 'redux'
import favListReducer from './reducers/favListReducer'
import { composeWithDevTools } from "redux-devtools-extension"
import combineReducers from './reducers/compineReducers'


// const store = createStore(favListReducer)

const store = createStore(combineReducers, composeWithDevTools())


// const composeEnhancers =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(favListReducer , composeEnhancers );


export default store