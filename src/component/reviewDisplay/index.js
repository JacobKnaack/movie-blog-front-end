import React from 'react'
import { Card, CardTitle, CardMedia } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import Close from 'material-ui/svg-icons/navigation/cancel'
import AuthorReview from './authorReview'
import './reviewDisplay.css'

class ReviewDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }

    this.toggleSelect = this.toggleSelect.bind(this)
  }

  toggleSelect() {
    this.setState({ selected: !this.state.selected })
    this.props.selectMovie(this.props.movie.name)
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
                key={review.author}
                review={review}
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
            title={this.props.movie.name}
            subtitle={this.props.movie.release}
          />
        </div>
        {reviewerSections}
      </Card>
    )
  }
}

export default ReviewDisplay
