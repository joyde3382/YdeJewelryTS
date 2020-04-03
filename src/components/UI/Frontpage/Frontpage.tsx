import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { Row, Col } from "antd";
import bgImage from "../../../assets/MountShasta2.jpg";
import styles from "./Frontpage.module.scss";
import Welcome from "./Sections/Welcome/Welcome";
import Portfolio from "./Sections/Portfolio/Portfolio";
import FollowUs from "./Sections/FollowUs/FollowUs";

const Frontpage: React.FC = () => {
  const state = useContext(ContextStore);

  return (
    <div>
      <Row>
        <Welcome />
      </Row>
      <Row>
        <Portfolio />
      </Row>
      <Row>
        <FollowUs />
      </Row>
    </div>
  );
};

export default Frontpage;
