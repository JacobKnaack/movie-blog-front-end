import React from 'react'
import marked from 'marked'
import { Card, CardHeader, CardText, CardTitle, CardMedia } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import Close from 'material-ui/svg-icons/hardware/keyboard-arrow-up'
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
  }


  render() {
    let reviewerSections, reviewClasses;
    if (this.state.selected === true) {
      reviewClasses = 'reviewCard selected'
      reviewerSections = (
        <div className='reviewContent'>
          <IconButton
            onClick={this.toggleSelect}
            className='closetxt'
            tooltip='Close review'
          >
            <Close/>
          </IconButton>
          <Divider className='reviewDivider'/>

          <CardHeader
            className='reviewHeading'
            title={this.props.reviews.submissions[2].author}
            subtitle={this.props.reviews.submissions[2].title}
          />
          <CardText
            className='reviewTxt'
            dangerouslySetInnerHTML={{__html: marked(this.props.reviews.submissions[2].markdown)}}
          />

        <Divider inset={ true }/>

          <CardHeader
            className='reviewHeading'
            title={this.props.reviews.submissions[1].author}
            subtitle={this.props.reviews.submissions[1].title}
          />
          <CardText
            className='reviewTxt'
            dangerouslySetInnerHTML={{__html: marked(this.props.reviews.submissions[1].markdown)}}
          />

        <Divider inset={ true }/>

          <CardHeader
            className='reviewHeading'
            title={this.props.reviews.submissions[0].author}
            subtitle={this.props.reviews.submissions[0].title}
          />
          <CardText
            className='reviewTxt'
            dangerouslySetInnerHTML={{__html: marked(this.props.reviews.submissions[0].markdown)}}
          />
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
          <CardMedia>
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
