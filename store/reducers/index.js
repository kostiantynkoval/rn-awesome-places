import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
  places: [],
  selectedPlace: null
}

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const key = `${action.payload}_${Math.ceil(Math.random() * (9999 - 1000) + 1000)}`;
      return {
        ...state,
        places: state.places.concat({
            placeName: action.payload,
          key,
          image: {
            uri: 'https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/d/db/Scarlett_Johansson_2003.jpg'
          }
        })
      }
    case DELETE_PLACE:
      return {
        // Uncomment if we have more than 2 fields in state(places and selectedPlace)
        //...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key), selectedPlace: null
      }
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: action.payload
      }
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      }
    default:
      return state
  }
}

export default placesReducer