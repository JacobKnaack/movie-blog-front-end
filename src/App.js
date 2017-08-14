import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import AddReviewBttn from 'material-ui/svg-icons/content/add'

import jacobInfo from './asset/content/jacob/index.json'
import jacobValerianReview from './asset/content/jacob/valerian.md'

import ivanInfo from './asset/content/ivan/index.json'
import ivanValerianReview from './asset/content/ivan/valerian.md'

import meganInfo from './asset/content/megan/index.json'
import meganValerianReview from './asset/content/megan/valerian.md'

import ValerianImage from './asset/img/ValerianImage.jpg'
import WelcomeGraphic from './asset/img/welcome-graphic.svg'
import ReviewDisplay from './component/reviewDisplay'
import AddReview from './component/addReview'
import * as util from './lib/util.js'
import './App.css'
// TODO: complete dux to configure store correctly
// import configureStore from './store/configureStore';

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
              <img id='welcomeImg' src={WelcomeGraphic} alt='Sick Flick Nit Pickers'/>
              <h1 id='mainHeading'>Sick Flick Nit Pickers</h1>
              <h4 id='mainSubtitle'>Movie Reviews by Jacob, Evaughn, and Megan</h4>
            </div>
            <section id='reviews'>
              <ul id='movieList'>
                <li>
                  <ReviewDisplay
                    title='Valerian and The City of A Thousand Planets'
                    release='2017'
                    jacob={jacobInfo.valerian}
                    jacobReview={jacobValerianReview}
                    ivan={ivanInfo.valerian}
                    ivanReview={ivanValerianReview}
                    megan={meganInfo.valerian}
                    meganReview={meganValerianReview}
                    image={ValerianImage}
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
