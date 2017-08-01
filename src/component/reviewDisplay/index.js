import React from 'react'
import { Card, CardHeader, CardText, CardTitle, CardMedia } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Close from 'material-ui/svg-icons/navigation/close'
import './reviewDisplay.css'

class ReviewDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }

    this.toggleSelect = this.toggleSelect.bind(this)
  }

  toggleSelect () {
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
          <CardHeader
            className='reviewHeading'
            title={this.props.movie.jacob.author}
            subtitle={this.props.movie.jacob.title}
          />
          <CardText className='reviewTxt'>
            {this.props.movie.jacob.text}
          </CardText>

          <CardHeader
            className='reviewHeading'
            title={this.props.movie.megan.author}
            subtitle={this.props.movie.megan.title}
          />
          <CardText className='reviewTxt'>
            {this.props.movie.megan.text}
          </CardText>

          <CardHeader
            className='reviewHeading'
            title={this.props.movie.ivan.author}
            subtitle={this.props.movie.ivan.title}
          />
          <CardText className='reviewTxt'>
            {this.props.movie.ivan.text}
          </CardText>
        </div>
      )
    } else {
      reviewClasses = 'reviewCard'
      reviewerSections = (
        <div className='emptySection' />
      )
    }

    return (
      <Card className={reviewClasses} onClick={this.toggleSelect}>
        <CardMedia>
          <img src={this.props.image} alt={this.props.movie.title}/>
        </CardMedia>
        <CardTitle
          className='movieTitle'
          title={this.props.movie.title}
          subtitle={this.props.movie.release}
        />
        {reviewerSections}
      </Card>
    )
  }
}

export default ReviewDisplay
