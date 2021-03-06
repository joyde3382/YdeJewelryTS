import React, { useContext } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import ContextStore from "../../../Context";
const SubMenu = Menu.SubMenu;

export const RightMenu: React.FC = () => {
  const state = useContext(ContextStore);

  function setCategory(category: string) {
    state.setFilter({ color: undefined, category: category });
  }

  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">
        <Link to="/">Home</Link>
      </Menu.Item>

      <SubMenu key="sub1" title={"Shop"}>
        <Menu.Item key="1" onClick={() => setCategory("jewelry")}>
          <Link to="/products">Jewelry</Link>
        </Menu.Item>

        <Menu.Item key="2" onClick={() => setCategory("paintings")}>
          <Link to="/products">Paintings</Link>
        </Menu.Item>

        <Menu.Item key="3" onClick={() => setCategory("ceramics")}>
          <Link to="/products">Ceramics</Link>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="about">
        <Link to="/About">About</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/Contact">Contact</Link>
      </Menu.Item>
      <Menu.Item key="cart">
        <Link to="/Cart">Cart</Link>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
