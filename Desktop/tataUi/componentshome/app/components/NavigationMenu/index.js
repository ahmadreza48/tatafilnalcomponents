/**
 *
 * NavigationMenu
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import MatIcon from '@material-ui/core/Icon';
import List from '../List';
import ListItem from '../List/ListItem';
import ListItemIcon from '../List/ListItemIcon';
import ListItemText from '../List/ListItemText';
import NavigationMenuLink from './NavigationMenuLink';
// import styled from 'styled-components';

function NavigationMenu(props) {
  return (
    <List>
      {props.items.map(item => (
        <ListItem>
          <ListItemIcon>
            <MatIcon />
          </ListItemIcon>
          <ListItemText>
            <NavigationMenuLink to={`/${item.page}`}>
              {item.title}
            </NavigationMenuLink>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

NavigationMenu.propTypes = {
  items: PropTypes.array.isRequired,
};

export default memo(NavigationMenu);
