import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {fetchMovies} from '../../reducers/movie'
import DisplayReviews from '../reviewDisplay'

class ReviewGallery extends Component {


//TODO: refactor so map functin can pull corrent data from movie id
  render() {
    return (
      <div className='movie-list'>
        <ul>
          {this.props.movies.map(movie => (
            <DisplayReviews
              key = {movie.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ReviewGallery
