import React, {useState} from "react";
import {Menu, MenuItem, MenuList} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import NestedMenuItem from "material-ui-nested-menu-item";

const useStyles = makeStyles({
  horizMenu: {
    display: 'flex'
  }

});

export default function Tnavigationbar(props) {

  const classes = useStyles();

  const [menuPosition,
    setMenuPosition] = useState(null);

  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({top: event.pageY, left: event.pageX});
  };

  const handleItemClick = (event) => {
    setMenuPosition(null);
  };

  return (

    <div>
      <MenuList>
        <div className={classes.horizMenu}>
          <MenuItem onClick={handleRightClick}>saeidi</MenuItem>
          <MenuItem onClick={handleRightClick}>kashani</MenuItem>
          <MenuItem onClick={handleRightClick}>talebi</MenuItem>
        </div>
      </MenuList>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}>
        <MenuItem onClick={handleItemClick}>Button 1</MenuItem>
        <MenuItem onClick={handleItemClick}>Button 2</MenuItem>
        <NestedMenuItem
          label="Button 3"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}>
          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
          <NestedMenuItem
            label="Sub-Button 3"
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}>
            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 1</MenuItem>
            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 2</MenuItem>
          </NestedMenuItem>
        </NestedMenuItem>
        <MenuItem onClick={handleItemClick}>Button 4</MenuItem>
        <NestedMenuItem
          label="Button 5"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}>
          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
        </NestedMenuItem>
      </Menu>
    </div>

  );
};
