import { shallow, mount } from 'enzyme';
import React from 'react';

import GifListItem from 'containers/GifListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import GifsList from '../index';

describe('<GifsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<GifsList loading />);
    expect(
      renderedComponent.contains(<List component={LoadingIndicator} />)
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <GifsList loading={false} error={{ message: 'Loading failed!' }} />
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the gifs if loading was successful', () => {
    const gifs = [
      {
        id: 'wysyxWt4ZlQ9q',
        url: 'https://media0.giphy.com/media/JQRKxN6GuhGhy/giphy_s.gif',
        title: 'trailer park boys cats GIF'
      }
    ];
    const renderedComponent = shallow(
      <GifsList gifs={gifs} error={false} />
    );

    expect(
      renderedComponent.contains(
        <List items={gifs} component={GifListItem} />
      )
    ).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <GifsList gifs={false} error={false} loading={false} />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
