import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import './style.scss';

export default class Lightbox extends React.PureComponent {
  render() {
    const { currentSlide, visible, gifs } = this.props;
    const GIF_LAST_ELEMENT = gifs.length - 1;
    const GIF_FIRST_ELEMENT = 0;
    // console.log()
    return (
      <React.Fragment>
        <Modal visible={visible} width="90%" height="80%" effect="fadeInUp" onClickAway={() => this.props.onCloseLightbox()}>
          <div className="lightbox-container">
            {/* close button */}
            <span className="close cursor" role="button" tabIndex={0} onKeyPress={() => { }} onClick={() => this.props.onCloseLightbox()}>&times;</span>
            {/* main slide */}
            {
              currentSlide
                ? <video autoPlay="autoplay" loop className="main-slide" src={currentSlide.images.original.mp4}><track kind="captions" /></video>
                : null
            }
            {/* thumbnails slides */}
            <div className="thumbnail-container">
              {
                gifs && currentSlide
                  ? gifs.map((gif) => {
                    if (gif.id !== currentSlide.id) {
                      return <div key={gif.id} role="button" tabIndex={0} onKeyPress={() => { }} onClick={() => this.props.onSetSlide(gif)}><img className="thumbnail" src={gif.images.original_still.url} alt="" /></div>;
                    }
                    return <div key={gif.id} role="button" tabIndex={0} onKeyPress={() => { }} onClick={() => this.props.onSetSlide(gif)}><img className="active thumbnail" src={gif.images.original_still.url} alt="" /></div>;
                  })
                  : null
              }
            </div>
            {/* prev and next button */}
            {/* eslint-disable array-callback-return */}
            <a
              className="prev"
              role="button"
              tabIndex={0}
              onKeyPress={() => { }}
              onClick={() => gifs.filter((gif, index, array) => {
                if (currentSlide.id === gif.id && currentSlide) {
                  if (index !== 0) {
                    this.props.onSetSlide(array[index - 1]);
                  } else {
                    this.props.onSetSlide(array[GIF_LAST_ELEMENT]);
                  }
                }
              })}
            >
              &#10094;
            </a>
            <a
              className="next"
              role="button"
              tabIndex={0}
              onKeyPress=""
              onClick={() => gifs.filter((gif, index, array) => {
                if (currentSlide.id === gif.id && currentSlide) {
                  if (index !== GIF_LAST_ELEMENT) {
                    this.props.onSetSlide(array[index + 1]);
                  } else {
                    this.props.onSetSlide(array[GIF_FIRST_ELEMENT]);
                  }
                }
              })}
            >
              &#10095;
            </a>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}


Lightbox.propTypes = {
  visible: PropTypes.bool,
  gifs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  currentSlide: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null]),
  ]),
  onCloseLightbox: PropTypes.func,
  onSetSlide: PropTypes.func,
};
