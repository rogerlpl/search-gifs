/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GifsList from 'components/GifsList';
import Lightbox from 'containers/Lightbox';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state keyword is not null, submit the form to load gifs
   */
  componentDidMount() {
    if (this.props.keyword && this.props.keyword.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, gifs } = this.props;
    const gifsListProps = {
      loading,
      error,
      gifs,
    };

    return (
      <React.Fragment>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Search gif application homepage" />
        </Helmet>
        <div className="home-page">
          <section>
            <form onSubmit={this.props.onSubmitForm}>
              <input
                id="keyword"
                type="text"
                placeholder="Search Your Gif Here..."
                value={this.props.keyword}
                onChange={this.props.onChangeKeyword}
              />
              <button>Search</button>
            </form>
            <Lightbox gifs={gifs} />
            <GifsList {...gifsListProps} />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  gifs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  keyword: PropTypes.string,
  onChangeKeyword: PropTypes.func,
};
