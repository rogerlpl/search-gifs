import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import './style.scss';
export default class Lightbox extends React.Component {

    render() {
        const { currentSlide, visible, gifs } = this.props;

        return (
            <React.Fragment>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.props.onOpenLightbox()} />
                <Modal visible={visible} width="90%" height="80%" effect="fadeInUp" onClickAway={() => this.props.onCloseLightbox()}>
                    <div className="lightbox-container">
                        {/* close button */}
                        <span className="close cursor" onClick={() => this.props.onCloseLightbox()}>&times;</span>
                        {/* main slide */}

                        <img className="main-slide" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />

                        {/* thumbnails slides */}
                        <div className="thumbnail-container">
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
                            <img className="thumbnail" src="https://www.w3schools.com/howto/img_snow.jpg" alt="" />
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
    currentSlide: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([null]),
    ]),
    onOpenLightbox: PropTypes.func,
    onCloseLightbox: PropTypes.func,
    onSetSlide: PropTypes.func,
};
