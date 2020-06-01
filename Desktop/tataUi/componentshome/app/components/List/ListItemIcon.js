/**
 *
 * ListItemIcon
 *
 */

import React, { memo, Children } from 'react';
import MatListItemIcon from '@material-ui/core/ListItemIcon';
import PropTypes from 'prop-types';

// import styled from 'styled-components';

function ListItemIcon(props) {
  return (
    <MatListItemIcon {...props}>
      {Children.toArray(props.children)}
    </MatListItemIcon>
  );
}

ListItemIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ListItemIcon);
