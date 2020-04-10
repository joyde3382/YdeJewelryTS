import React, { useContext } from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import ContextStore from "../../../../../Context";

const Filters: React.FC = () => {
  const state = useContext(ContextStore);

  return (
    <Menu style={{ width: 256 }} mode="inline">
      <SubMenu
        key="sub1"
        title={
          <span>
            <span>Category</span>
          </span>
        }
      >
        <Menu.Item key="1" onClick={() => filterCategory("jewelry")}>
          Jewelry
        </Menu.Item>
        <Menu.Item key="2" onClick={() => filterCategory("paintings")}>
          Paintings
        </Menu.Item>
        <Menu.Item key="3" onClick={() => filterCategory("ceramics")}>
          Ceramics
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub2"
        title={
          <span>
            <span>Color</span>
          </span>
        }
      >
        <Menu.Item key="4" onClick={() => filterColor("white")}>
          White
        </Menu.Item>
        <Menu.Item key="5" onClick={() => filterColor("black")}>
          Black
        </Menu.Item>
        <Menu.Item key="6" onClick={() => filterColor("orange")}>
          Orange
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub3"
        title={
          <span>
            <span>Price</span>
          </span>
        }
      >
        <Menu.Item key="9">Under $10</Menu.Item>
        <Menu.Item key="10">$10-$20</Menu.Item>
        <Menu.Item key="11">$20-$30</Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub4"
        title={
          <span>
            <span>Metal</span>
          </span>
        }
      >
        <Menu.Item key="12">Silver</Menu.Item>
        <Menu.Item key="13">Gold</Menu.Item>
      </SubMenu>
    </Menu>
  );

  function filterCategory(category: string) {
    state.setFilter({ color: state.filter?.color, category: category });
  }

  function filterColor(color: string) {
    state.setFilter({ color: color, category: state.filter?.category });
  }
};

export default Filters;
