import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectKeyword,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      gifData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectKeyword', () => {
  const keywordSelector = makeSelectKeyword();
  it('should select the keyword', () => {
    const keyword = 'Cats';
    const mockedState = fromJS({
      home: {
        keyword,
      },
    });
    expect(keywordSelector(mockedState)).toEqual(keyword);
  });
});
