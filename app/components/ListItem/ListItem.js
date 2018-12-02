import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => (
  <React.Fragment>
    <li className="list-item">{props.item}</li>
  </React.Fragment>
);

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;
