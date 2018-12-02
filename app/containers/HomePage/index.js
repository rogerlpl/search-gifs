import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectGifs,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadGifs } from '../App/actions';
import { changeKeyword } from './actions';
import { makeSelectKeyword } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeKeyword: (evt) => dispatch(changeKeyword(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadGifs());
  }
});

const mapStateToProps = createStructuredSelector({
  gifs: makeSelectGifs(),
  keyword: makeSelectKeyword(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
