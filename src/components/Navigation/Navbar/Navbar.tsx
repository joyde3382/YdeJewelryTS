import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu, Button, Drawer } from "antd";
import styles from "./Navbar.module.scss";
import ContextStore from "../../../Context";
import LeftMenu from "../LeftMenu/LeftMenu";
import RightMenu from "../RightMenu/RightMenu";

const handleClick = () => {
  console.log("click");
};

const { SubMenu } = Menu;

export const Navbar: React.FC = () => {
  const state = useContext(ContextStore);

  const showDrawer = () => {
    state.setDrawer(true);
  };

  const closeDrawer = () => {
    state.setDrawer(false);
  };
  return (
    <nav className={styles.menuBar}>
      {/* <div className={styles.Logo}>
        <a href="">logo</a>
      </div> */}
      <div className={styles.menuCon}>
        <div className={styles.leftMenu}>
          <LeftMenu />
        </div>
        <div className={styles.rightMenu}>
          <RightMenu />
        </div>
        <Button className={styles.barsMenu} type="primary" onClick={showDrawer}>
          <span className={styles.barsBtn}></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={closeDrawer}
          visible={state.drawer}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <Menu
      onClick={handleClick}
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      // mode="inline"
    >
      <Menu.Item key="one">
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
        <Menu.ItemGroup key="g1" title="Item 1">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <Menu.Item key="two">
        <Link to="/Products">Products</Link>
      </Menu.Item>

      <Menu.Item key="three">
        <Link to="/About">About</Link>
      </Menu.Item>

      <Menu.Item style={{ float: "right" }} key="four">
        <Link to="/cart">Cart</Link>
      </Menu.Item>
    </Menu> */
}
