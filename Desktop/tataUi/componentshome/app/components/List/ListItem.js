/**
 *
 * ListItem
 *
 */

import React, { memo, Children } from 'react';
import MatListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ListItem(props) {
  return (
    <React.Fragment>
      <MatListItem {...props}>{Children.toArray(props.children)}</MatListItem>
    </React.Fragment>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ListItem);
