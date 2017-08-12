import combineReducers from 'redux'
import { CALL_API, getJSON } from 'redux-api-middleware'

// --------------------
// CONSTANTS
// --------------------
export const CREATE_REVIEW_REQUEST = 'CREATE_REVIEW_REQUEST'
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS'
export const CREATE_REVIEW_FAILURE = 'CREATE_REVIEW_FAILURE'

export const FETCH_REVIEWS_REQUEST = 'FETCH_REVIEWS_REQUEST'
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS'
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE'

export const UPDATE_REVIEW_REQUEST = 'UPDATE_REVIEW_REQUEST'
export const UPDATE_REVIEW_SUCCESS = 'UPDATE_REVIEW_SUCCESS'
export const UPDATE_REVIEW_FAILURE = 'UPDATE_REVIEW_FAILURE'

// --------------------
// ACTIONS
// --------------------
export const createReview = ({ title, release, img }) => (
  dispatch,
  getState
) => {
  dispatch({
    [CALL_API]: {
      endpoints: `${process.env.API_URL}/review`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        title,
        release,
        img,
      }),
      types: [
        CREATE_REVIEW_REQUEST,
        {
          type: CREATE_REVIEW_SUCCESS,
          payload: (action, state, res) => {
            return getJSON(res).then(json => {
              return json;
            });
          }
        },
        CREATE_REVIEW_FAILURE
      ]
    }
  });
};


// TODO: finish adding redux logic for modifing review on the backend
export const fetchReviews = (dispatch, getState) => {
  dispatch({
    [CALL_API]: {

    }
  })
}

// --------------------
// Reduces
// --------------------
export const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
    case CREATE_REVIEW_REQUEST:
      return true;
    case FETCH_REVIEWS_SUCCESS:
    case FETCH_REVIEWS_FAILURE:
    case CREATE_REVIEW_SUCCESS:
    case CREATE_REVIEW_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
    case FETCH_REVIEWS_SUCCESS:
    case CREATE_REVIEW_REQUEST:
    case CREATE_REVIEW_SUCCESS:
      return null;
    case FETCH_REVIEW_FAILURE:
    case CREATE_REVIEW_FAILURE:
      return action.payload.data || { message: action.payload.message };
    default:
      return state;
  }
};

const data = (state = {}, action) => {
  switch(action.type) {
    case FETCH_REVIEWS_SUCCESS:
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        ...action.payload.reviews
      };
    default:
      return state;
  }
}

const reviews = combineReducers({
  isFetching,
  error,
  data
})

export default reviews;
