import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import data from './db.json'
import images, { siteGraphics } from './asset/img'

import history from './history'
import FeatureList from './component/FeatureList'
import FeatureArticle from './component/FeatureArticle'
import ReviewGallery from './component/reviewGallery'
import FooterMenu from './component/footerMenu'
import * as util from './lib/util'
import './App.css'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  componentDidMount () {
    history.listen(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="App">
        <main id='homeContainer'>
          <div id='heading'>
            <img id='logoImg' src={siteGraphics.Logo} alt='SFNP logo' />
            <h4 id='mainSubtitle'>Movie Reviews</h4>
          </div>
          {util.renderIf(!window.location.href.includes('/feature') && !window.location.href.includes('/?movie'),
            <div id='feature'>
              <FeatureList 
                features={data.features}
                featureImgs={data.featureImages}
              />
            </div>
          )}
          <Switch>
            <Route path='/feature/:articleUrl'>
              <FeatureArticle
                article={
                  util.findArticleById(
                    data.featureArticles,
                    parseInt(window.location.href.slice(-1), 10)
                  )}
                articleImg={
                  util.findFeatureImage(
                    data.featureImages,
                    parseInt(window.location.href.slice(-1), 10)
                  )}
              />
            </Route>
            <Route path='/'>
              <section id='reviews'>
                <ReviewGallery
                  movies={data.movies}
                  reviews={data.reviews}
                  movieImgs={data.movieImages}
                  images={images}
                />
              </section>
            </Route>
          </Switch>
          <FooterMenu />
        </main>
      </div>
    );
  }
}

export default App;
