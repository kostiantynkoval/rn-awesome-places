import { createStore, combineReducers } from 'redux'

import placeReducer from './reducers'

const rootReducer = combineReducers({
  places: placeReducer
})

const store = createStore(rootReducer)

export default store