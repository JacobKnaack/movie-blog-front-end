const awsUrl = process.env.REACT_APP_AWS_URL

export const FETCHING_IMAGE = 'FETCHING_IMAGE'

export const loadImage = (image) => ({ type: FETCHING_IMAGE, payload: image })

export const fetchImage = (imageName) => {
  return (dispatch) => {
    fetch(`${awsUrl}/${imageName}`, {
      method: 'GET',
    }).then(response => {
      dispatch(console.log(response));
    })    
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case FETCHING_IMAGE:
      return action.payload
    default:
      return state
  }
}