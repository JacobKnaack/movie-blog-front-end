//constants
export const SET_AUTHOR = 'SET_AUTHOR'
export const REMOVE_AUTHOR = 'REMOVE_AUTHOR'

//actions
export const setAuthor = (author) => ({ type: SET_AUTHOR, payload: author })
export const removeAuthor = () => ({ type: REMOVE_AUTHOR, payload: ''})

//reducers
export default (state = '', action) => {
  switch (action.type) {
    case SET_AUTHOR:
      return action.payload
    case REMOVE_AUTHOR:
      return action.payload
    default:
      return state
  }
}
