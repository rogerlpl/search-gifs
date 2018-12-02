/**
 * Test the repo list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';

import ListItem from 'components/ListItem';
import GifListItem from '../GifListItem';

const renderComponent = (props = {}) => render(<GifListItem {...props} />);

describe.only('<GifListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      id: 'wysyxWt4ZlQ9q',
      images: {
        original_still: {
          url: 'https://media0.giphy.com/media/W3QKEujo8vztC/giphy_s.gif'
        }
      },
      title: 'trailer park boys cats GIF'
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(<GifListItem item={item} />);
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });

  it('should render the gif title', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.title);
  });

  it('should render the gif image', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.html()).toContain(item.images.original_still.url);
  });
});
