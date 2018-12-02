/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import GifsList from 'components/GifsList';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { changeKeyword } from '../actions';
import { loadGifs } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the gifs list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} gifs={[]} />
    );
    expect(
      renderedComponent.contains(<GifsList loading error={false} gifs={[]} />)
    ).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeKeyword', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeKeyword).toBeDefined();
      });

      it('should dispatch changeKeyword when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const keyword = 'cats';
        result.onChangeKeyword({ target: { value: keyword } });
        expect(dispatch).toHaveBeenCalledWith(changeKeyword(keyword));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadGifs when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadGifs());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
