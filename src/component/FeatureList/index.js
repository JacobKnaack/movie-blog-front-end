import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, CardMedia } from 'material-ui/Card'

import * as util from '../../lib/util'
import { formatPublicImageUrl } from '../../lib/aws'
import './_featureList.css'

class FeatureList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      featureList: []
    }
  }

  componentWillMount() {
    this.setState({ featureList: this.props.features})
  }

  render() {
    const cardStyle = {
      position: 'relative',
      width: '90vw',
      height: '300px',
      margin: '0 auto'
    }

    const imgStyle = {
      height: '300px', 
      objectFit: 'cover'
    }

    const cardTextStyle = {
      position: 'absolute',
      width: 'calc(100% - 50px)',
      height: '100px',
      lineHeight: '100px',
      fontFamily: 'Ultra',
      textAlign: 'left',
      paddingLeft: '50px',
      top: '100px',
      fontSize: '250%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      color: '#282828'
    }

    const featureCards = []
    this.state.featureList.forEach(feature => {
      let link = `/feature/${feature.id}`

      featureCards.push(
        <Link key={feature.id} to={link}>
          <Card 
            style={cardStyle}>

            <CardMedia>
              <img
                style={imgStyle}
                src={ formatPublicImageUrl(
                  util.findFeatureImage(this.props.featureImgs, feature.id)
                )}
                alt={feature.name}
              />
            </CardMedia>

            <h2 style={cardTextStyle}>{feature.name}</h2>

          </Card>
        </Link>
      )
    })

    return(
      <div className='featureList'>
        <h2 className='featureHeader'>Sick Flicks Featured Articles</h2>
        <div className='featureScroll'>
          {featureCards}        
        </div>
      </div>
    )
  }
}

FeatureList.propType = {
  feature: PropTypes.array,
  fearureImgs: PropTypes.array,
}

export default FeatureList