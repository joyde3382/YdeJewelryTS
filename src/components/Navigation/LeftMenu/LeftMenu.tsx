import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const LeftMenu: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>Pretty logo</Menu.Item>
    </Menu>
  );
};
export default LeftMenu;
