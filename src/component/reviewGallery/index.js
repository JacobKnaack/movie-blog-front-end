import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {fetchMovies} from '../../reducers/movie'
// import { Carousel } from 'react-materialize'
import DisplayReview from '../reviewDisplay'
import './_ReviewGallery.css'

class ReviewGallery extends Component {

  render() {
    let reviews = []
    for (var i = 0; i < this.props.movies.length; i++) {
      reviews.push(
        <DisplayReview
          key={this.props.movies[i].name}
          className='carousel-item'
          reviews={this.props.reviews[i]}
          movie={this.props.movies[i]}
          image={this.props.images.reviewImages[i]}
        />
      )
    }

    return (
      <div className='movie-list'>
        {reviews.reverse()}
        <div id='bottom-margin' />
      </div>
    )
  }
}

export default ReviewGallery
// export default connect(
//   (state) => ({movies: state.movies})
//   {fetchMovies}
// )(ReviewGallery)
