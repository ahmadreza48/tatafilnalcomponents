/**
 *
 * List
 *
 */

import React, { memo, Children } from 'react';
import MatList from '@material-ui/core/List';
import PropTypes from 'prop-types';

// import styled from 'styled-components';

function List(props) {
  return <MatList {...props}>{Children.toArray(props.children)}</MatList>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(List);
