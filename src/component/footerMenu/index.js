import React, { Component } from 'react'

// import AddReview from '../addReview'
// import * as util from '../../lib/util.js'
import './_FooterMenu.css'

class FooterMenu extends Component {
  render() {
    return (
      <div className='footerMenu'>
        <ul className='menuItems'>
          <li id='signInBttn'>
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
