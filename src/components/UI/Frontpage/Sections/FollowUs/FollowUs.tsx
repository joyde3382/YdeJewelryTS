import React from "react";
import styles from "./FollowUs.module.scss";
import { Row } from "antd";
import fbIcon from "../../../../../assets/fbIcon.png";
import insIcon from "../../../../../assets/InsIcon.png";
import pinIcon from "../../../../../assets/pinIcon.png";
import { Link } from "react-router-dom";

const FollowUs: React.FC = () => {
  return (
    <div>
      <h1 className={styles.header}>Follow us now</h1>
      <p className={styles.header}>Follow us on social media</p>
      <Row>
        <a href="https://www.facebook.com">
          <img style={{ paddingRight: "1rem" }} src={fbIcon}></img>
        </a>
        <a href="https://www.instagram.com">
          <img style={{ paddingRight: "1rem" }} src={insIcon}></img>
        </a>
        <a href="https://www.pinterest.com">
          <img style={{ paddingRight: "1rem" }} src={pinIcon}></img>
        </a>
      </Row>
    </div>
  );
};

export default FollowUs;
