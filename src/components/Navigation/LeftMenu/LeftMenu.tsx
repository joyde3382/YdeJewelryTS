import React, { Component } from "react";
import { Menu } from "antd";

export const LeftMenu: React.FC = () => {
  return (
    <Menu mode="horizontal" style={{ textDecoration: "none" }}>
      <Menu.Item>Pretty logo</Menu.Item>
    </Menu>
  );
};
export default LeftMenu;
