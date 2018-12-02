import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadGifs,
  gifsLoaded,
  gifLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentKeyword: false,
      gifData: fromJS({
        gifs: false,
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadGifs action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['gifData', 'gifs'], false);

    expect(appReducer(state, loadGifs())).toEqual(expectedResult);
  });

  it('should handle the gifsLoaded action correctly', () => {
    const fixture = [{
      name: 'My gif',
    }];
    const keyword = 'test';
    const expectedResult = state
      .setIn(['gifData', 'gifs'], fixture)
      .set('loading', false)
      .set('currentKeyword', keyword);

    expect(appReducer(state, gifsLoaded(fixture, keyword))).toEqual(expectedResult);
  });

  it('should handle the gifLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, gifLoadingError(fixture))).toEqual(expectedResult);
  });
});
