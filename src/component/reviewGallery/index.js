import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchImage} from '../../dux/images'
import { decode, encode, addUrlProps, UrlQueryParamTypes, replaceInUrlQuery } from 'react-url-query'

import DisplayReview from '../reviewDisplay'
import Search from 'material-ui/svg-icons/action/search'
import * as util from '../../lib/util'
import './_ReviewGallery.css'

function mapUrlToProps(url, props) {
  return {
    movie: decode(UrlQueryParamTypes.string, url.movie),
    review: decode(UrlQueryParamTypes.String, url.review)
  }
}

function mapUrlChangeHandlersToProps(props) {
  return {
    onChangeMovie: (value) => replaceInUrlQuery('movie', encode(UrlQueryParamTypes.string, value))
  }
}

class ReviewGallery extends Component {
  static propTypes = {
    movie: PropTypes.string,
    review: PropTypes.string,
    onChangeMovie: PropTypes.func,
    onCHangeReview: PropTypes.func
  }

  static defaultProps = {
   movie: ''
 }

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchReviews: []
    }

    this.movieSearch = this.movieSearch.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }
  
  // Searches a the list of reviews with the value in the search input, occurs on input change
  movieSearch (e, reviewArray) {
    let { name, value } = e.target
    this.setState({ [name]: value })

    let searchResults = [],
        lowerName
    for (var i = 0; i < reviewArray.length; i ++) {
      lowerName = reviewArray[i].key.toLowerCase()
      if (lowerName.includes(value.toLowerCase())) {
        searchResults.push(reviewArray[i])
      }
    }

    this.setState({ searchReviews: searchResults })
  };

  // sets selected movie state variable
  selectMovie (movieName) {
    if (this.props.movie === movieName) {
      this.props.onChangeMovie('')
    } else {
      this.props.onChangeMovie(movieName)
    }
  }

  render() {
    let reviews = []
    // filters through movies in db and creates Display Items, putting them into an Array
    for (var i = 0; i < this.props.movies.length; i++) {
      reviews.push(
        <DisplayReview
          key={this.props.movies[i].name}
          selectMovie={this.selectMovie}
          reviews={this.props.reviews[i]}
          movieFromArray={this.props.movies[i]}
          movieImg={util.findMovieImage(this.props.movieImgs, this.props.movies[i].id)}
          image={this.props.images.reviewImages[i]}
          avatars={this.props.images.avatars}
        />
      )
    }
    // filters array based on search string seaarch results
    if (this.state.searchReviews && this.state.search) {
      reviews = this.state.searchReviews
    }

    // searches review array for movie matching a selected name
    if (this.props.movie) {
      reviews = [reviews.find(name => {
        return name.key === this.props.movie
      })]
    } else {
      util.sortMoviesByReleaseDate(reviews)
    }


    return (
      <div className='movie-list'>
        {util.renderIf(!this.props.movie,
          <div className='movieSearchInput'>
            <label>
              <Search />
            </label>
            <input
              name='search'
              onChange={ (e) => this.movieSearch(e, reviews) }
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

export default addUrlProps({ mapUrlToProps, mapUrlChangeHandlersToProps })(ReviewGallery)

// connecting component to redux store
export const reviewImages = connect(
  (state) => ({images: state.images}),
  {fetchImage}
)(ReviewGallery)
