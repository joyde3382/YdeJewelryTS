import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const RightMenu: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">
        <Link to="/">Home</Link>
      </Menu.Item>

      <SubMenu
        key="sub1"
        title={
          <span>
            <span>Shop</span>
          </span>
        }
      >
        <Menu.Item key="1">
          <Link to="/products/jewelry">Jewelry</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/products/paintings">Paintings</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/products/ceramics">Ceramics</Link>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="about">
        <Link to="/About">About</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/Contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};
export default RightMenu;
