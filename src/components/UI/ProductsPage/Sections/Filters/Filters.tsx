import React, { useContext } from "react";
import { Menu, Radio, Button } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import ContextStore from "../../../../../Context";
import FilterCheckbox from "./FilterCheckbox";
import { Link } from "react-router-dom";

const Filters: React.FC = () => {
  const state = useContext(ContextStore);
  return (
    <div>
      <Menu style={{ border: "white", width: "150px" }} mode="inline">
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>Category</span>
            </span>
          }
        >
          <Radio.Group style={{ paddingLeft: "24px" }} onChange={onChange}>
            <Radio
              style={{ display: "block" }}
              value={"jewelry"}
              checked={state.filter?.category === "jewelry" ? true : false}
            >
              Jewelry
            </Radio>
            <Radio
              style={{ display: "block" }}
              value={"paintings"}
              checked={state.filter?.category === "paintings" ? true : false}
            >
              Paintings
            </Radio>
            <Radio
              style={{ display: "block" }}
              value={"ceramics"}
              checked={state.filter?.category === "ceramics" ? true : false}
            >
              Ceramics
            </Radio>
          </Radio.Group>
        </SubMenu>

        <SubMenu
          key="sub2"
          title={
            <span>
              <span>Color</span>
            </span>
          }
        >
          <Radio.Group style={{ paddingLeft: "24px" }} onChange={onChange}>
            <Radio style={{ display: "block" }} value={"white"}>
              White
            </Radio>
            <Radio style={{ display: "block" }} value={"black"}>
              Black
            </Radio>
            <Radio style={{ display: "block" }} value={"orange"}>
              Orange
            </Radio>
          </Radio.Group>
        </SubMenu>

        <SubMenu
          key="sub3"
          title={
            <span>
              <span>Price</span>
            </span>
          }
        >
          <Radio.Group style={{ paddingLeft: "24px" }} onChange={onChange}>
            <Radio style={{ display: "block" }} value={"u10"}>
              Under $10
            </Radio>
            <Radio style={{ display: "block" }} value={"10-20"}>
              $10-$20
            </Radio>
            <Radio style={{ display: "block" }} value={"20-30"}>
              $20-$30
            </Radio>
          </Radio.Group>
        </SubMenu>

        <SubMenu
          key="sub4"
          title={
            <span>
              <span>Metal</span>
            </span>
          }
        >
          <Radio.Group style={{ paddingLeft: "24px" }}>
            <Radio
              name="myCheckbox"
              style={{ display: "block" }}
              value={"silver"}
              onClick={onChange}
            >
              Silver
            </Radio>
            <Radio
              name="myCheckbox"
              style={{ display: "block" }}
              value={"gold"}
              onClick={onChange}
            >
              Gold
            </Radio>
          </Radio.Group>
        </SubMenu>
      </Menu>
      <Link to="/products">
        <Button onClick={resetFilter}>Reset</Button>
      </Link>
    </div>
  );

  function resetFilter() {
    state.setFilter({});
    console.log(state.filter);
  }

  function onChange(e: any) {
    console.log("Radio checked", e);
    switch (e.target.value) {
      case "jewelry":
        filterCategory("jewelry");
        console.log("filter jewelry");
        break;
      case "paintings":
        filterCategory("paintings");
        break;
      case "ceramics":
        filterCategory("ceramics");
        break;
      case "white":
        filterColor("white");
        break;
      case "black":
        filterColor("black");
        break;
      case "orange":
        filterColor("orange");
        break;
      case "u10":
        filterPrice("low");
        break;
      case "10-20":
        filterPrice("medium");
        break;
      case "20-30":
        filterPrice("high");
        break;
      default:
        filterCategory("all");
        break;
    }
  }

  function filterCategory(category: string) {
    state.setFilter({
      color: state.filter?.color,
      category: category,
      priceTag: state.filter?.priceTag,
    });
  }

  function filterColor(color: string) {
    state.setFilter({
      color: color,
      category: state.filter?.category,
      priceTag: state.filter?.priceTag,
    });
  }

  function filterPrice(priceTag: string) {
    state.setFilter({
      category: state.filter?.category,
      color: state.filter?.color,
      priceTag: priceTag,
    });
  }
};

export default Filters;
