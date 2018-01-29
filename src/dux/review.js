const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000'

//constants
export const REVIEWS_LOAD = 'REVIEWS_LOAD'
export const REVIEWS_RESET = 'REVIEWS_RESET'
export const REVIEW_ADD = 'REVIEW_ADD'

//actions
export const loadReviews = (reviews) => ({type: REVIEWS_LOAD, payload: reviews})
export const resetReviews = () => ({type: REVIEWS_RESET, payload: [] })
export const addReview = (review) => ({type: REVIEW_ADD, payload: review})

export const fetchReviews = (movieid) => {
  return (dispatch) => {
    fetch(`${baseUrl}/reviews/${movieid}`)
    .then(res => {
      dispatch(loadReviews(res))
      res.json()
    })
  }
}

export const saveReview = (review) => {
  return (dispatch) => {
    fetch(`${baseUrl}/reviews`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => {
      dispatch(addReview(res))
      res.json()
    })
  }
}

export const patchReviews = (review) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/reviews/${review.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => {
        dispatch(addReview(res))
        res.json()
      })
  }
}

//reducers
export default (state = [], action) => {
  switch (action.type) {
    case REVIEWS_LOAD:
    case REVIEWS_RESET:
    case REVIEW_ADD:
      return action.payload
    default:
      return state
  }
}
