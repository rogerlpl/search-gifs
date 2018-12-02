import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import {
  openLightbox,
  closeLightbox,
  setCurrentSlide
} from './actions';
import {
  makeSelectCurrentSlide,
  makeSelectVisibility
} from './selectors';
import reducer from './reducer';
import Lightbox from './Lightbox';

const mapDispatchToProps = (dispatch) => ({
  onOpenLightbox: () => dispatch((openLightbox())),
  onCloseLightbox: () => dispatch((closeLightbox())),
  onSetSlide: (slide) => {
    dispatch(setCurrentSlide(slide));
  }
});

const mapStateToProps = createStructuredSelector({
  visible: makeSelectVisibility(),
  currentSlide: makeSelectCurrentSlide(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'lightbox', reducer });

export default compose(withReducer, withConnect)(Lightbox);
export { mapDispatchToProps };
