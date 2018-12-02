/**
 * GifListItem
 *
 * Lists the image of a gif
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import './style.scss';

export default class GifListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    // Put together the title
    const content = (
      <div className="item" onClick={() => {this.props.onSetSlide(item);this.props.onOpenLightbox();}}>
        <figure className="item-gif">
          <img  src={item.images.original_still.url} alt="" />
        </figure>
        <span className="item-overlay">
          <p>
            <span className="item-gif-title">{item.title}</span>
          </p>
        </span>
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem key={`gif-list-item-${item.id}`} item={content} />
    );
  }
}

GifListItem.propTypes = {
  item: PropTypes.object,
  onSetSlide: PropTypes.func,
};
