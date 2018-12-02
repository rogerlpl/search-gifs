import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectCurrentKeyword,
  makeSelectLoading,
  makeSelectError,
  makeSelectGifs,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectCurrentKeyword', () => {
  const currentKeywordSelector = makeSelectCurrentKeyword();
  it('should select the current keyword', () => {
    const currentKeyword = 'cats';
    const mockedState = fromJS({
      global: {
        currentKeyword,
      },
    });
    expect(currentKeywordSelector(mockedState)).toEqual(currentKeyword);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectGifs', () => {
  const gifsSelector = makeSelectGifs();
  it('should select the gifs', () => {
    const gifs = fromJS([]);
    const mockedState = fromJS({
      global: {
        gifData: {
          gifs,
        },
      },
    });
    expect(gifsSelector(mockedState)).toEqual(gifs);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const route = fromJS({
      location: { pathname: '/foo' },
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.get('location').toJS());
  });
});
