import React from 'react';
import marked from 'marked';
import { Card, CardHeader, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/navigation/expand-more';
import Less from 'material-ui/svg-icons/navigation/expand-less';
import * as util from '../../lib/util';

class AuthorReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }

    this.toggleReview = this.toggleReview.bind(this)
  };

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
        <CardHeader
          className='reviewHeading'
          title={this.props.review.title}
          subtitle={this.props.review.author}
        />
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
