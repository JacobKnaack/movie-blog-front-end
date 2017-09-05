import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import AddReviewBttn from 'material-ui/svg-icons/content/add'

import data from './db.json'
import images from './asset/img'

//TODO: fix review gallery 
import ReviewGallery from './component/reviewGallery'
import ReviewDisplay from './component/reviewDisplay'
import AddReview from './component/addReview'
import * as util from './lib/util.js'
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
              <h4 id='mainSubtitle'>Movie Reviews by Jacob, Evaughn, and Megan</h4>
            </div>
            <section id='reviews'>
              <ul id='movieList'>
                <li>
                  <ReviewDisplay
                    reviews={data.reviews[0]}
                    movie={data.movies[0]}
                    image={images.ValerianTitleImage}
                  />
                  <ReviewDisplay
                    reviews={data.reviews[1]}
                    movie={data.movies[1]}
                    image={images.AtomicBlondeTitleImage}
                  />
                  <ReviewDisplay
                    reviews={data.reviews[2]}
                    movie={data.movies[2]}
                    image={images.DunkirkTitleImage}
                  />
                </li>
              </ul>
            </section>
            <FloatingActionButton
              id='addReviewBttn'
              onClick={this.toggleReviewForm}
            >
              <AddReviewBttn />
            </FloatingActionButton>

            {util.renderIf(this.state.showReviewForm,
              <AddReview reviewForm={ this.toggleReviewForm } />
            )}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
