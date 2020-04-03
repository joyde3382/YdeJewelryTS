import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import {
  CommandBar,
  ICommandBarItemProps
} from "office-ui-fabric-react/lib/CommandBar";
import "antd/dist/antd.css";
import { Menu } from "antd";
import styles from "./Navbar.module.scss";

const handleClick = () => {
  console.log("click");
};

export const Navbar: React.FC = () => {
  return (
    <Menu className={styles.navbar} onClick={handleClick} mode="horizontal">
      <Menu.Item key="one">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="two">
        <Link to="/Products">Products</Link>
      </Menu.Item>
      <Menu.Item key="three">
        <Link to="/About">About</Link>
      </Menu.Item>
      <Menu.Item key="four">
        <Link to="https://ant.design">Navigation Four - Link</Link>
      </Menu.Item>
    </Menu>
  );
};

const _items: ICommandBarItemProps[] = [
  {
    key: "newItem",
    text: "New",
    cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
    iconProps: { iconName: "Add" },
    subMenuProps: {
      items: [
        {
          key: "emailMessage",
          text: "Email message",
          iconProps: { iconName: "Mail" },
          ["data-automation-id"]: "newEmailButton" // optional
        },
        {
          key: "calendarEvent",
          text: "Calendar event",
          iconProps: { iconName: "Calendar" }
        }
      ]
    }
  },
  {
    key: "upload",
    text: "Upload",
    iconProps: { iconName: "Upload" },
    href: "https://dev.office.com/fabric"
  },
  {
    key: "share",
    text: "Share",
    iconProps: { iconName: "Share" },
    onClick: () => console.log("Share")
  },
  {
    key: "download",
    text: "Download",
    iconProps: { iconName: "Download" },
    onClick: () => console.log("Download")
  }
];

export default Navbar;
