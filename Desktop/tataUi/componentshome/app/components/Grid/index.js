/**
 *
 * Grid
 *
 */

import React, { Children } from 'react';
import MatGrid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Grid(props) {
  const grid = (
    <MatGrid item {...props}>
      {Children.toArray(props.children)}
    </MatGrid>
  );

  return <React.Fragment>{grid}</React.Fragment>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
