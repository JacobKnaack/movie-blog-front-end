export const renderIf = (test, component) => test ? component : undefined

export const classToggler = (options) =>
  Object.keys(options).filter(key => !!options[key]).join(' ')

export const sortMoviesByReleaseDate = (movieArray) => {

  movieArray.sort(function(a,b) {
    return new Date(a.props.movieFromArray.release) - new Date(b.props.movieFromArray.release)
  })
}

export const findMovieImage = (imgArray, movieId) => {
  for (var img in imgArray) {
    if (imgArray[img].movieId === movieId) return imgArray[img].imageName
  }
}