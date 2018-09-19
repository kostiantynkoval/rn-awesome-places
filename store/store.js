import { createStore, combineReducers, compose } from 'redux'

import placeReducer from './reducers'

const rootReducer = combineReducers({
  places: placeReducer
})

let composeEnhancers = compose;

if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  rootReducer,
  composeEnhancers()
)

export default store