import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardMedia } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog'
import { decode, encode, addUrlProps, UrlQueryParamTypes, replaceInUrlQuery } from 'react-url-query'
import Copy from 'copy-to-clipboard'

function mapUrlToProps(url, props) {
  return {
    // movie: decode(UrlQueryParamTypes.string, url.movie),
    // review: decode(UrlQueryParamTypes.string, url.review)
  }
}

function mapUrlChangeHandlersToProps(props) {
  return {
    // onChangeMovie: (value) => replaceInUrlQuery('movie', encode(UrlQueryParamTypes.string, value)),
    // onChangeReview: (value) => replaceInUrlQuery('review', encode(UrlQueryParamTypes.string, value))
  }
}

class FeatureDisplay extends React.Component {
  static propTypes = {
    feature: PropTypes.string,
    article: PropTypes.string,
  }



}

export default FeaturDisplay