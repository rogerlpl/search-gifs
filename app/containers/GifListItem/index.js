import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentKeyword } from 'containers/App/selectors';
import GifListItem from './GifListItem';

export default connect(
  createStructuredSelector({
    currentKeyword: makeSelectCurrentKeyword()
  })
)(GifListItem);
