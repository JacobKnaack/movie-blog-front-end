import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {fetchMovies} from '../../reducers/movie'
// import { Carousel } from 'react-materialize'
import DisplayReview from '../reviewDisplay'
import './_ReviewGallery.css'

class ReviewGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }

    this.movieSearch = this.movieSearch.bind(this)
  }

  movieSearch (e, reviewArray, searchString) {
    let searchResults = []
    let { name, value } = e.target
    this.setState({ [name]: value })

    for (var i = 0; i < reviewArray.length; i ++) {
      if (reviewArray[i].key.includes(searchString)) {
        searchResults.push(reviewArray[i])
      }
    }

    console.log(searchResults)
  };

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
        <div className='movieSearchInput'>
          <label>Search Reviews:</label>
          <input
            name='search'
            onChange={(e) => this.movieSearch(e, reviews, this.state.search)}
            value={this.state.search}
          />
        </div>
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
