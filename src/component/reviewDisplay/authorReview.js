import React from 'react';
import marked from 'marked';
import { Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/navigation/expand-more';
import Less from 'material-ui/svg-icons/navigation/expand-less';
import * as util from '../../lib/util';

class AuthorReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
      avatar: ''
    }

    this.toggleReview = this.toggleReview.bind(this)
  };

  componentDidMount () {
    for (var i = 0; i < this.props.avatars.length; i++) {
      if (this.props.avatars[i].author === this.props.review.author) {
        this.setState({ avatar: this.props.avatars[i].image })
      }
    }
  }

  toggleReview () {
    this.setState({ selected: !this.state.selected })
  };

  render () {
    let cardClasses = 'reviewContainer'
    if (this.state.selected) cardClasses += ' selected'

    return (
      <Card
        id={this.props.review.author}
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
            title={this.props.review.title}
            subtitle={this.props.review.author}
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
              dangerouslySetInnerHTML={{__html: marked(this.props.review.markdown)}}
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

export default AuthorReview;
