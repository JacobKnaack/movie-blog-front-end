import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import data from './db.json'
import images from './asset/img'

//TODO: fix review gallery
import ReviewGallery from './component/reviewGallery'
import FooterMenu from './component/footerMenu'
import './App.css'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showReviewForm: false
    }

    this.toggleReviewForm = this.toggleReviewForm.bind(this)
  }

  toggleReviewForm () {
    this.setState({ showReviewForm: !this.state.showReviewForm })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <main id='homeContainer'>
            <div id='heading'>
              <img id='welcomeImg' src={images.HeaderGraphic} alt='Sick Flick Nit Pickers'/>
              <h1 id='mainHeading'>Sick Flick Nit Pickers</h1>
              <h4 id='mainSubtitle'>Movie Reviews by Jacob, e-vaughn, and Megan</h4>
            </div>
            <section id='reviews'>
              <ReviewGallery
                movies={data.movies}
                reviews={data.reviews}
                images={images}
              />
            </section>
            <FooterMenu />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
