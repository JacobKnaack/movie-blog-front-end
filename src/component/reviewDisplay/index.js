import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardMedia } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog'
import { decode, encode, addUrlProps, UrlQueryParamTypes, replaceInUrlQuery } from 'react-url-query'
import Copy from 'copy-to-clipboard'

import Close from 'material-ui/svg-icons/navigation/close'
import Share from 'material-ui/svg-icons/social/share'
import AuthorReview from './AuthorReview'
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
      selected: false,
      copied: false
    }

    this.toggleSelect = this.toggleSelect.bind(this)
    this.copyUrl = this.copyUrl.bind(this)
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

  copyUrl () {
    Copy(window.location.href)
    this.setState( {copied: true })
    window.setTimeout( () => {
      this.setState({ copied: false })
    }, 2000)
  }

  render() {
    let reviewerSections, reviewClasses;
    if (this.state.selected) {
      reviewClasses = 'reviewCard selected'
      reviewerSections = (
        <div className='reviewContent'>
          <Divider className='reviewDivider'/>
          <div className='reviewList'>
            <div className='reviewMenu'>
              <Dialog
                title='Url Copied'
                modal={false}
                open={this.state.copied}
              >
                Your clipboard now contains a direct link to this page!
              </Dialog>
              <IconButton
                onClick={this.toggleSelect}
                className='reviewMenuBttn'
                tooltip='Close Reviews'
                tooltipPosition='top-center'
              >
                <Close/>
              </IconButton>
              <IconButton
                onClick={this.copyUrl}
                className='reviewMenuBttn'
                tooltip='Share Link'
                tooltipPosition='top-center'
              >
                <Share />
              </IconButton>
            </div>
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
