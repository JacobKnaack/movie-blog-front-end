export const renderIf = (test, component) => test ? component : undefined

export const classToggler = (options) =>
  Object.keys(options).filter(key => !!options[key]).join(' ')

export const sortMoviesByReleaseDate = (movieArray) => {

  movieArray.sort(function(a,b) {
    return new Date(a.props.movieFromArray.release) - new Date(b.props.movieFromArray.release)
  })
}

export const findMovieImage = (imgArray, id) => {
  for (var img in imgArray) {
    if (imgArray[img].movieId === id) return imgArray[img].imageName
  }
}

export const findFeatureImage = (imgArray, id) => {
  for (var img in imgArray) {
    if (imgArray[img].featureId === id) {
      return imgArray[img].imageName
    }
  }
}

export const findArticleById = (articleArray, id) => {
  for (var article in articleArray) {
    if (articleArray[article].featureId === id) {
      return articleArray[article]
    }
  }
}