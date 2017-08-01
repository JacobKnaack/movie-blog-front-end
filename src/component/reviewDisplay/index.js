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

  componentWillMount () {
    fetch(this.props.jacobReview)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ jacobMarkdown: marked(text) })
      })

    fetch(this.props.meganReview)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ meganMarkdown: marked(text) })
      })

    fetch(this.props.ivanReview)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ ivanMarkdown: marked(text) })
      })
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
            title='Jacob'
            subtitle={this.props.jacob.title}
          />
          <CardText
            className='reviewTxt'
            dangerouslySetInnerHTML={{__html: this.state.jacobMarkdown}}
          />

        <Divider inset={ true }/>

          <CardHeader
            className='reviewHeading'
            title='Megan'
            subtitle={this.props.megan.title}
          />
          <CardText
            className='reviewTxt'
            dangerouslySetInnerHTML={{__html: this.state.meganMarkdown}}
          />

        <Divider inset={ true }/>

          <CardHeader
            className='reviewHeading'
            title='Evaughn'
            subtitle={this.props.ivan.title}
          />
          <CardText
            className='reviewTxt'
            dangerouslySetInnerHTML={{__html: this.state.ivanMarkdown}}
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
            title={this.props.title}
            subtitle={this.props.release}
          />
        </div>
        {reviewerSections}
      </Card>
    )
  }
}

export default ReviewDisplay
