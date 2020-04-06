import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { Row } from "antd";
import Welcome from "./Sections/Welcome/Welcome";
import Portfolio from "./Sections/Portfolio/Portfolio";
import FollowUs from "./Sections/FollowUs/FollowUs";

const Frontpage: React.FC = () => {
  const state = useContext(ContextStore);

  return (
    <div>
      <Row style={{ display: "block" }}>
        <Welcome />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Portfolio />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <FollowUs />
      </Row>
    </div>
  );
};

export default Frontpage;
