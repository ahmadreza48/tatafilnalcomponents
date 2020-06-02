import React from 'react';
import PropTypes from 'prop-types';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';

export default function MainMenu(props) {
  const {
    triggerSubMenuAction = 'click',
    mode = 'horizontal',
    defaultOpenKeys = ['1'],
    openAnimation = 'slide-up',
  } = props;

  const handleClick = () => {};

  const collapseNode = () => ({ height: 0 });
  const expandNode = node => ({ height: node.scrollHeight });

  const inlineMotion = {
    motionName: 'rc-menu-collapse',
    onAppearStart: collapseNode,
    onAppearActive: expandNode,
    onEnterStart: collapseNode,
    onEnterActive: expandNode,
    onLeaveStart: expandNode,
    onLeaveActive: collapseNode,
  };

  const nestSubMenu = (
    <SubMenu
      title={<span className="submenu-title-wrapper"> offset sub menu 2 </span>}
      key="4"
      popupOffset={[10, 15]}
    >
      <MenuItem key="4-1">inner inner</MenuItem>
      <Divider />
      <SubMenu
        key="4-2"
        title={<span className="submenu-title-wrapper"> sub menu 1 </span>}
      >
        <SubMenu
          title={<span className="submenu-title-wrapper"> sub 4 - 2 - 0 </span>}
          key="4-2-0"
        >
          <MenuItem key="4-2-0-1">inner inner</MenuItem>
          <MenuItem key="4-2-0-2">inner inner2</MenuItem>
        </SubMenu>
        <MenuItem key="4-2-1">inn</MenuItem>
        <SubMenu
          title={<span className="submenu-title-wrapper"> sub menu 4 </span>}
          key="4-2-2"
        >
          <MenuItem key="4-2-2-1">inner inner</MenuItem>
          <MenuItem key="4-2-2-2">inner inner2</MenuItem>
        </SubMenu>
        <SubMenu
          title={<span className="submenu-title-wrapper"> sub menu 3 </span>}
          key="4-2-3"
        >
          <MenuItem key="4-2-3-1">inner inner</MenuItem>
          <MenuItem key="4-2-3-2">inner inner2</MenuItem>
        </SubMenu>
      </SubMenu>
    </SubMenu>
  );

  const onOpenChange = () => {};

  const children1 = [
    <SubMenu
      title={<span className="submenu-title-wrapper">sub menu</span>}
      key="1"
    >
      <MenuItem key="1-1">0-1</MenuItem>
      <MenuItem key="1-2">0-2</MenuItem>
    </SubMenu>,
    nestSubMenu,
    <MenuItem key="2">1</MenuItem>,
    <MenuItem key="3">outer</MenuItem>,
    <MenuItem key="5" disabled>
      disabled
    </MenuItem>,
    <MenuItem key="6">outer3</MenuItem>,
  ];

  // const [children, setChildren] = useState(children1);
  // const [overflowedIndicator, setoOverflowedIndicator] = useState(undefined);

  return (
    <div>
      <Menu
        onClick={handleClick}
        triggerSubMenuAction={triggerSubMenuAction}
        onOpenChange={onOpenChange}
        selectedKeys={['3']}
        mode={mode}
        openAnimation={openAnimation}
        defaultOpenKeys={defaultOpenKeys}
        overflowedIndicator={undefined}
        motion={inlineMotion}
      >
        {children1}
      </Menu>
    </div>
  );
}

MainMenu.propTypes = {
  mode: PropTypes.string,
  openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  triggerSubMenuAction: PropTypes.string,
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
};
