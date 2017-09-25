import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {fetchMovies} from '../../reducers/movie'
// import { Carousel } from 'react-materialize'
import DisplayReview from '../reviewDisplay'
import * as util from '../../lib/util'
import './_ReviewGallery.css'

class ReviewGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchReviews: [],
      gallerySelection: ''
    }

    this.movieSearch = this.movieSearch.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }

  // search function used to filter review array
  movieSearch (e, reviewArray, searchString) {
    let { name, value } = e.target
    this.setState({ [name]: value })
    let searchResults = [], lowerName

    for (var i = 0; i < reviewArray.length; i ++) {
      lowerName = reviewArray[i].key.toLowerCase()
      if (lowerName.includes(searchString.toLowerCase())) {
        searchResults.push(reviewArray[i])
      }
    }

    this.setState({ searchReviews: searchResults })
  };

  // sets selected movie state variable
  selectMovie (movieName) {
    if (this.state.gallerySelection === movieName) {
      this.setState({ gallerySelection: '' })
    } else {
      this.setState({ gallerySelection: movieName })
    }
  }

  render() {
    // filters through movies in db and creates Display Items, putting them into an Array
    let reviews = []
    for (var i = 0; i < this.props.movies.length; i++) {
      reviews.push(
        <DisplayReview
          key={this.props.movies[i].name}
          selectMovie={this.selectMovie}
          reviews={this.props.reviews[i]}
          movie={this.props.movies[i]}
          image={this.props.images.reviewImages[i]}
          avatars={this.props.images.avatars}
        />
      )
    }
    if (this.state.searchReviews && this.state.search) reviews = this.state.searchReviews

    // searches review array for movie matching a selected name
    if (this.state.gallerySelection) {
      reviews = [reviews.find(name => {
        return name.key === this.state.gallerySelection
      })]
    }

    return (
      <div className='movie-list'>
        {util.renderIf(!this.state.gallerySelection,
          <div className='movieSearchInput'>
            <label>Search Reviews: </label>
            <input
              name='search'
              onChange={ (e) => this.movieSearch(e, reviews, this.state.search) }
              value={this.state.search}
              />
          </div>
        )}
        {reviews.reverse()}
        <div className='bottom-margin' />
      </div>
    )
  }
}

export default ReviewGallery
// export default connect(
//   (state) => ({movies: state.movies})
//   {fetchMovies}
// )(ReviewGallery)
