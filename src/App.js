import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import data from './db.json'
import images, { siteGraphics } from './asset/img'


import history from './history';
import ReviewGallery from './component/reviewGallery'
import FooterMenu from './component/footerMenu'
import './App.css'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  componentDidMount () {
    history.listen(() => this.forceUpdate());
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <main id='homeContainer'>
            <div id='heading'>
              {/* <img id='welcomeImg' src={images.HeaderGraphic} alt='Sick Flick Nit Pickers watching flicks'/> */}
              {/* <h1 id='mainHeading'>Sick Flick Nit Pickers</h1> */}
              <img id='logoImg' src={siteGraphics.Logo} alt='SFNP logo' />
              <h4 id='mainSubtitle'>Movie Reviews</h4>
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
