import React, { Component } from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
// import SearchIcon from 'material-ui/svg-icons/action/search'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

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
          <li id='menuBttn' onClick={this.toggleFooterMenu}>
            <MenuIcon className='svgIcon'/>
          </li>
          {/*<li id='searchBox'>
            <label className='inputLabel'>
              <SearchIcon className='svgIcon' />
            </label>
            <input
              className='footerInput'
            />
          </li>*/}
        </ul>
        <div id='openMenuItems'>
          <Menu id='muiMenu'>
            <MenuItem primaryText='Sign In' />
            <MenuItem
              children={
                <a
                  href='https://github.com/JacobKnaack/movie-blog-front-end/issues'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suggestions?
                </a>
              }
            />
          </Menu>
        </div>
      </div>
    )
  }
}

export default FooterMenu
