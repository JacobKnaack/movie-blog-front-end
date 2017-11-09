import React from 'react';
import PropTypes from 'prop-types'
import marked from 'marked';
import { Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { decode, encode, addUrlProps, UrlQueryParamTypes, replaceInUrlQuery } from 'react-url-query'

import More from 'material-ui/svg-icons/navigation/expand-more';
import Less from 'material-ui/svg-icons/navigation/expand-less';
import * as util from '../../lib/util';

function mapUrlToProps(url, props) {
  return {
    movie: decode(UrlQueryParamTypes.string, url.movie),
    review: decode(UrlQueryParamTypes.string, url.review)
  }
}

function mapUrlChangeHandlersToProps (props) {
  return {
    onChangeReview: (value) => replaceInUrlQuery('review', encode(UrlQueryParamTypes.string, value))
  }
}

class AuthorReview extends React.Component {
  static propTypes = {
    movie: PropTypes.string,
    review: PropTypes.string,
    onChangeReview: PropTypes.func
  }

  static defaultProps = {
    movie: '',
    review: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: false,
      avatar: ''
    }

    this.toggleReview = this.toggleReview.bind(this)
  };

  componentDidMount () {
    if ( this.props.review === this.props.reviewFromArray.title ) {
      this.setState({ selected: true })
    }
    for (var i = 0; i < this.props.avatars.length; i++) {
      if (this.props.avatars[i].author === this.props.reviewFromArray.author) {
        this.setState({ avatar: this.props.avatars[i].image })
      }
    }
  }

  toggleReview () {
    this.setState({ selected: !this.state.selected })
    if( this.props.review === this.props.reviewFromArray.title) {
      this.props.onChangeReview('')
    } else this.props.onChangeReview(this.props.reviewFromArray.title)
  };

  render () {
    let cardClasses = 'reviewContainer'
    if (this.state.selected) cardClasses += ' selected'

    return (
      <Card
        id={this.props.reviewFromArray.author}
        className={cardClasses}
        onClick={() => {
          if (!this.state.selected) this.toggleReview()
        }}
      >
        <div className='headingContainer'>
          <Avatar
            className='authorAvatar'
            src={this.state.avatar}
            size={100}
            backgroundColor='#E9967A'
          />
          <CardHeader
            className='reviewHeading'
            title={this.props.reviewFromArray.title}
            subtitle={this.props.reviewFromArray.author}
          />
        </div>
        {util.renderIf(!this.state.selected,
          <IconButton
            className='closetxt'
            tooltip='Read Review'
            >
            <More/>
          </IconButton>
        )}
        {util.renderIf(this.state.selected,
          <div>
            <CardText
              className='reviewTxt'
              dangerouslySetInnerHTML={{__html: marked(this.props.reviewFromArray.markdown)}}
            />
            <IconButton
              onClick={this.toggleReview}
              className='closetxt'
              tooltip='Close Review'
            >
              <Less/>
            </IconButton>
          </div>
        )}
      </Card>
    )
  }
};

export default addUrlProps({ mapUrlToProps, mapUrlChangeHandlersToProps })(AuthorReview)
