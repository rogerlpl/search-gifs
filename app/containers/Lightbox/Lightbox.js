import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import './style.scss';
export default class Lightbox extends React.Component {

    render() {
        const { currentSlide, visible, gifs } = this.props;
        // console.log()
        return (
            <React.Fragment>
                <Modal visible={visible} width="90%" height="80%" effect="fadeInUp" onClickAway={() => this.props.onCloseLightbox()}>
                    <div className="lightbox-container">
                        {/* close button */}
                        <span className="close cursor" onClick={() => this.props.onCloseLightbox()}>&times;</span>
                        {/* main slide */}
                        {
                           currentSlide ?
                           <img className="main-slide" src={currentSlide.images.original.url} alt="" />
                            : 
                            null
                        }
                        {/* thumbnails slides */}
                        <div className="thumbnail-container">
                            {
                                gifs ? 
                                gifs.map((gif) => {
                                  return  <img key={gif.id} onClick={() => this.props.onSetSlide(gif)} className="thumbnail" src={gif.images.original_still.url} alt="" />
                                })
                                    :
                                    null
                            }
                        </div>
                        {/* prev and next button */}
                        <a className="prev">&#10094;</a>
                        <a className="next">&#10095;</a>
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
    onOpenLightbox: PropTypes.func,
    onCloseLightbox: PropTypes.func,
    onSetSlide: PropTypes.func,
};
