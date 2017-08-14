import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { Card } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Close from 'material-ui/svg-icons/navigation/close'

import { jacobId, ivanId, meganId } from '../../index.js'
import * as util from '../../lib/util.js'
import './_AddReview.css'

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authorId: '',
      author: '',
      movie: '',
      release: '',
      title: '',
      content: '',
      fileType: 'Pick a file type',
      imagePath: '',
      loginError: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.addReview = this.addReview.bind(this)
    this.updateReview = this.updateReview(this)
  }

  login (e) {
    e.preventDefault()
    if (this.state.authorId === jacobId) {
      this.setState({author: 'Jacob'})
    } else if (this.state.authorId === ivanId) {
      this.setState({ author: 'Ivan'})
    } else if (this.state.authorId === meganId) {
      this.setState({ author: 'Megan' })
    } else {
      this.setState({ loginError: 'no matching id found' })
    }
  }

  addReview () {

  }

  updateReview () {

  }

  handleChange (e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  changeFileType = (event, index, fileType) => {
    this.setState({fileType});
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
              <form id='authForm' onSubmit={this.login}>
                <TextField
                  name='authorId'
                  hintText='Enter ID'
                  value={this.state.authorId}
                  onChange={this.handleChange}
                  errorText={this.state.loginError}
                />
                <RaisedButton
                  id='authBttn'
                  label="login"
                  secondary={true}
                  type='submit'
                />
              </form>
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
              <h2>Oh hey {this.state.author}</h2>
              <form>
                <div id='movieInfo'>
                  <TextField
                    name='movie'
                    value={this.state.movie}
                    hintText='What Movie are you reviewing?'
                    onChange={this.handleChange}
                  />
                <TextField
                  name='release'
                  value={this.state.release}
                  hintText='release year'
                  onChange={this.handleChange}
                />
                  <div id='imageSelect'>
                    <DropDownMenu
                      value={this.state.fileType}
                      onChange={this.changeFileType}
                    >
                      <MenuItem
                        value='image/png'
                        primaryText="png"
                      />
                      <MenuItem
                        value='image/gif'
                        primaryText='gif'
                      />
                      <MenuItem
                        value='image/jpeg'
                        primaryText='jpeg'
                      />
                    </DropDownMenu>
                    <input type='file' />
                  </div>
                </div>
                <TextField
                  name='title'
                  value={this.state.title}
                  hintText='Review Title'
                  onChange={this.handleChange}
                />
                <textarea
                  id='reviewInput'
                  rows='20' cols='70'
                  defaultValue='Paste or write your review here...'
                />
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
