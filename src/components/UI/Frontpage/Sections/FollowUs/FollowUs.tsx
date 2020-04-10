import React from "react";
import styles from "./FollowUs.module.scss";
import { Row } from "antd";
import fbIcon from "../../../../../assets/fbIcon.png";
import insIcon from "../../../../../assets/InsIcon.png";
import pinIcon from "../../../../../assets/pinIcon.png";
import idaImage from "../../../../../assets/IdaImage.jpg";
import { Link } from "react-router-dom";
import FollowUsCard from "./FollowUsCard/FollowUsCard";

const FollowUs: React.FC = () => {
  return (
    <div>
      <h1 className={styles.header}>Join our community</h1>
      <div style={{ display: "flex" }}>
        <img style={{ width: 240, paddingRight: "3rem" }} src={idaImage}></img>
        <div>
          <FollowUsCard
            linkUrl="https://www.facebook.com"
            imageUrl={fbIcon}
          ></FollowUsCard>
          <br />
          <FollowUsCard
            linkUrl="https://www.intagram.com"
            imageUrl={insIcon}
          ></FollowUsCard>
          <br />
          <FollowUsCard
            linkUrl="https://www.pinterest.com"
            imageUrl={pinIcon}
          ></FollowUsCard>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
