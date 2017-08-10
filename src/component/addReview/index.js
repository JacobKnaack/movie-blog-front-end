import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { Card } from 'material-ui/Card'
import Close from 'material-ui/svg-icons/navigation/close'
import './_AddReview.css'

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      title: '',
      content: '',
      fileType: '',
      imagePath: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <div id='reviewFormBackground'/>
        <div id='addReviewForm'>
          <Card id='card'>
            <FloatingActionButton onClick={this.props.reviewForm}>
              <Close />
            </FloatingActionButton>
            <form>
              <h3>Submit a review</h3>
              <label>Image</label>
              <input type='file' />
              <label>Title</label>
              <input type='text'/>
                <label>Review</label>
                <input type='text'/>
              <input type='submit' />
            </form>
          </Card>
        </div>
      </div>
    )
  }
}

export default AddReview;
