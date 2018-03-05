import React from 'react'
import marked from 'marked'
import ReactDOMServer from 'react-dom/server'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'

import Images from '../../asset/img'
import ImageViewer from '../ImageViewer'
import { formatPublicImageUrl } from '../../lib/aws'
import './_featureArticle.css'

class FeatureArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      markdown: ''
    }
  }

  componentWillMount() {
    this.setState({
      title: this.props.article.title,
      markdown: this.props.article.markdown
    })
  }

  render() {
    const paperStyle = {
      position: 'relative',
      width: '90vw',
      margin: '30px auto 100px auto',
    }

    const formattedHtml = this.formatHtml(marked(this.state.markdown))

    return(
      <Paper 
        className='featureArticle'
        style={paperStyle}
      > 
        <div className='articleHead'>
          <img src={ formatPublicImageUrl(this.props.articleImg) } alt={this.props.articleImg}/>
          <h2>{this.state.title}</h2>
          <h3>A Sick Flicks Special</h3>

          <div className='authors'>
            <div className='authorItem'>
              <Avatar
                src={Images.avatars[1].image}
                size={100}
                backgroundColor='#E9967A'
              />
              <p>e-vaughn</p>
            </div>
            <div className='authorItem'>
              <Avatar
                src={Images.avatars[0].image}
                size={100}
                backgroundColor='#E9967A'
              />
              <p>Jacob</p>
            </div>
            <div className='authorItem'>
              <Avatar
                src={Images.avatars[2].image}
                size={100}
                backgroundColor='#E9967A'
              />
              <p>Megan</p>
            </div>
          </div>
        </div>


        <div 
          className='content'
          dangerouslySetInnerHTML={{__html: formattedHtml}} 
        />

      </Paper>
    )
  }

  formatHtml(html) {
    let imgArray = html.match(/<img[^>]+([>])/g)

    if (imgArray) {
      for (var i = 0; i < imgArray.length; i++) {

        let temp = imgArray[i].split(' '),
          captionArray = [],
          captionText = '',
          regex = new RegExp(`<img[^>]+${temp[1]}([^>]+)>`)

        for (var j = 0; j < temp.length; j++) {
          if (j > 1) {
            captionArray.push(temp[j])
          }
        }
        captionText = captionArray.join(' ').substring(5).slice(0, -2)

        const image = ReactDOMServer.renderToStaticMarkup(<ImageViewer imgSrc={temp[1].substring(5).slice(0, -1)} alt={captionText} />)
        html = html.replace(regex, image)
      }
    }

    return html
  }
}

export default FeatureArticle