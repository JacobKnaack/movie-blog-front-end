const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000'

//constants
export const MOVIES_LOAD = 'MOVIES_LOAD'
export const MOVIE_ADD = 'MOVIE_ADD'
export const MOVIE_FIND ='MOVIE_FIND'
export const MOVIE_CHANGE = 'MOVIE_CHANGE'

//actions
export const loadMovies = (movies) => ({type: MOVIES_LOAD, payload: movies})
export const addMovie = (movie) => ({type: MOVIE_ADD, payload: movie})
export const findMovie = (movie) => ({type: MOVIE_FIND, payload: movie})
export const changeMovie = (movie) => ({type: MOVIE_CHANGE, payload: movie})

export const fetchMovies = () => {
  return(dispatch) => {
    fetch(`${baseUrl}/movies`)
    .then(movies => {
      dispatch(loadMovies(movies))
    })
  }
}

export const saveMovie = (movie) => {
  return(dispatch) => {
    fetch(`${baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(res => {
      dispatch(addMovie(res))
    })
  }
}

export const patchMovie = (movie) => {
  return(dispatch) => {
    fetch(`${baseUrl}/movies/${movie.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(res => {
      dispatch(changeMovie(res))
    })
  }
}

//reducers
export default (state = [], action) => {
  switch (action.type) {
    case MOVIES_LOAD:
    case MOVIE_ADD:
    case MOVIE_FIND:
    case MOVIE_CHANGE:
      return action.payload
    default:
      return state
  }
}
