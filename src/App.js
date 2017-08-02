import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import jacobInfo from './asset/content/jacob/index.json'
import jacobValerianReview from './asset/content/jacob/valerian.md'

import ivanInfo from './asset/content/ivan/index.json'
import ivanValerianReview from './asset/content/ivan/valerian.md'

import meganInfo from './asset/content/megan/index.json'
import meganValerianReview from './asset/content/megan/valerian.md'

import ValerianImage from './asset/img/ValerianImage.jpg'
import WelcomeGraphic from './asset/img/welcome-graphic.svg'
import ReviewDisplay from './component/reviewDisplay'
import './App.css'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <main id='homeContainer'>
            <div id='heading'>
              <img id='welcomeImg' src={WelcomeGraphic}/>
              <h1 id='mainHeading'>Sick Flick Nit Pickers</h1>
              <h4 id='mainSubtitle'>Movie Reviews by Jacob, Evaughn and Megan</h4>
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
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
