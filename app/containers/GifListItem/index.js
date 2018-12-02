import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentKeyword } from 'containers/App/selectors';
import { 
  setCurrentSlide,
  openLightbox,
} from 'containers/Lightbox/actions';
import GifListItem from './GifListItem';


const mapDispatchToProps = (dispatch) => ({
  onOpenLightbox: () => dispatch((openLightbox())),
  onSetSlide: (slide) => {
      dispatch(setCurrentSlide(slide));
    }
});

export default connect(
  createStructuredSelector({
    currentKeyword: makeSelectCurrentKeyword()
  }),mapDispatchToProps
)(GifListItem);
