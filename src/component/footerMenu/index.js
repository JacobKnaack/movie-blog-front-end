import React, { Component } from 'react'

// import AddReview from '../addReview'
// import * as util from '../../lib/util.js'
import './_FooterMenu.css'

class FooterMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.toggleFooterMenu = this.toggleFooterMenu.bind(this)
  }

  toggleFooterMenu () {
    this.setState({ open: !this.state.open })
  }

  render() {
    let footerClasses = 'footerMenu'
    if (this.state.open === true) footerClasses += ' open'

    return (
      <div className={footerClasses}>
        <ul className='menuItems'>
          <li id='signInBttn' onClick={this.toggleFooterMenu}>
            Sign In
          </li>
          <li id='requestBttn'>
            <a
              href='https://github.com/JacobKnaack/movie-blog-front-end/issues'
              target="_blank"
              rel="noopener noreferrer"
            >
              Suggestions!
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default FooterMenu
