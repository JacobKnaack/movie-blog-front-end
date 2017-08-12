import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { Card } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Close from 'material-ui/svg-icons/navigation/close'

import * as util from '../../lib/util.js'
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
        {util.renderIf(this.state.author <= 0,
          <div id='authorAuthForm' className='reviewForm'>
            <Card className='card'>
              <FloatingActionButton
                className='formClose'
                onClick={this.props.reviewForm}
              >
                <Close />
              </FloatingActionButton>
              <h3>Please Enter your Nit Picker ID</h3>
              <TextField
                hintText='Nit Picker ID'
              />
            </Card>
          </div>
        )}
        {util.renderIf(this.state.author.length > 0,
          <div id='addReviewForm' className='reviewForm'>
            <Card className='card'>
              <FloatingActionButton
                className='formClose'
                onClick={this.props.reviewForm}
              >
                <Close />
              </FloatingActionButton>
              <form>
                <h3>Submit a Review</h3>
                <div id='imageSelect'>
                  <label>Image</label>
                  <DropDownMenu>
                    <MenuItem primaryText='png'/>
                    <MenuItem primaryText='gif'/>
                    <MenuItem primaryText='jpeg'/>
                  </DropDownMenu>
                  <input type='file' />
                </div>
                <label>Give you're review a title:</label>
                <input type='text'/>
                <label>Review</label>
                <textarea id='reviewInput' rows='10' cols='70' defaultValue='Paste or write your review here...' />
                <input type='submit' />
              </form>
            </Card>
          </div>
        )}
      </div>
    )
  }
}

export default AddReview;
