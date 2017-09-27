import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardMedia } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import { decode, encode, addUrlProps, UrlQueryParamTypes, replaceInUrlQuery } from 'react-url-query'

import Close from 'material-ui/svg-icons/navigation/cancel'
import AuthorReview from './authorReview'
import './reviewDisplay.css'

function mapUrlToProps(url, props) {
  return {
    movie: decode(UrlQueryParamTypes.string, url.movie),
    review: decode(UrlQueryParamTypes.string, url.review)
  }
}

function mapUrlChangeHandlersToProps(props) {
  return {
    onChangeMovie: (value) => replaceInUrlQuery('movie', encode(UrlQueryParamTypes.string, value)),
    onChangeReview: (value) => replaceInUrlQuery('review', encode(UrlQueryParamTypes.string, value))
  }
}

class ReviewDisplay extends React.Component {
  static propTypes = {
    movie: PropTypes.string,
    review: PropTypes.string
  }

  static defaultProps = {
    movie: null,
    review: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }

    this.toggleSelect = this.toggleSelect.bind(this)
  }

  componentDidMount () {
    if (this.props.movie) this.setState({ selected: true })
  }

  toggleSelect() {
    this.setState({ selected: !this.state.selected })
    this.props.selectMovie(this.props.movieFromArray.name)
    if (this.props.movie) this.props.onChangeMovie('')
    if (this.props.review) this.props.onChangeReview('')
  }


  render() {
    let reviewerSections, reviewClasses;
    if (this.state.selected) {
      reviewClasses = 'reviewCard selected'
      reviewerSections = (
        <div className='reviewContent'>
          <Divider className='reviewDivider'/>
          <div className='reviewList'>
            <IconButton
              onClick={this.toggleSelect}
              className='closeCard'
              tooltip='Close Reviews'
              tooltipPosition='top-right'
            >
              <Close/>
            </IconButton>
            {this.props.reviews.submissions.map(review => (
              <AuthorReview
                avatars={this.props.avatars}
                key={review.author}
                reviewFromArray={review}
              />
            ))}
          </div>
        </div>
      )
    } else {
      reviewClasses = 'reviewCard'
      reviewerSections = (
        <div className='emptySection' />
      )
    }

    return (
      <Card className={reviewClasses}>
        <div onClick={this.toggleSelect}>
          <CardMedia className='titleImage'>
            <img src={this.props.image} alt=''/>
          </CardMedia>
          <CardTitle
            className='movieTitle'
            title={this.props.movieFromArray.name}
            subtitle={this.props.movieFromArray.release}
          />
        </div>
        {reviewerSections}
      </Card>
    )
  }
}

export default addUrlProps({ mapUrlToProps, mapUrlChangeHandlersToProps })(ReviewDisplay)
