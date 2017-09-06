import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {fetchMovies} from '../../reducers/movie'
// import { Carousel } from 'react-materialize'
import DisplayReview from '../reviewDisplay'
import './_ReviewGallery.css'

class ReviewGallery extends Component {

//TODO: refactor so map function can pull corrent data from movie id
  render() {
    return (
      <div className='movie-list'>
        <DisplayReview
          reviews={this.props.reviews[0]}
          movie={this.props.movies[0]}
          image={this.props.images.ValerianTitleImage}
        />
        <DisplayReview
          className='carousel-item'
          reviews={this.props.reviews[1]}
          movie={this.props.movies[1]}
          image={this.props.images.AtomicBlondeTitleImage}
        />
        <DisplayReview
          className='carousel-item'
          reviews={this.props.reviews[2]}
          movie={this.props.movies[2]}
          image={this.props.images.DunkirkTitleImage}
        />
      </div>
    )
  }
}

export default ReviewGallery
// export default connect(
//   (state) => ({movies: state.movies})
//   {fetchMovies}
// )(ReviewGallery)
