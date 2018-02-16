import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authorReducer from '../dux/author'
import movieReducer from '../dux/movie'
import reviewReducer from '../dux/review'
import imageReducer from '../dux/images'

const reducer = combineReducers({
  author: authorReducer,
  movies: movieReducer,
  reviews: reviewReducer,
  images: imageReducer
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
