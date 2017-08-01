import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reviews from './asset/reviews.json'
import ReviewDisplay from './component/reviewDisplay'
import ValerianImage from './asset/img/ValerianImage.jpg'
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
              <h1>Sick Flick Nit Pickers</h1>
              <h4>Movie Reviews by Jacob, Ivan and Megan</h4>
            </div>
            <section id='reviews'>
              <ul id='movieList'>
                <li>
                  <ReviewDisplay movie={reviews.valerian} image={ValerianImage}/>
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
