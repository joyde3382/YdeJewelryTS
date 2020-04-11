import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Button, Drawer } from "antd";
import styles from "./Navbar.module.scss";
import ContextStore from "../../../Context";
import LeftMenu from "../LeftMenu/LeftMenu";
import RightMenu from "../RightMenu/RightMenu";

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
