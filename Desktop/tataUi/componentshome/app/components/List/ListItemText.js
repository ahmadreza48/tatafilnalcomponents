/**
 *
 * ListItemIcon
 *
 */

import React, { memo, Children } from 'react';
import MatListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ListItemText(props) {
  return (
    <MatListItemText {...props}>
      {Children.toArray(props.children)}
    </MatListItemText>
  );
}

ListItemText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ListItemText);
