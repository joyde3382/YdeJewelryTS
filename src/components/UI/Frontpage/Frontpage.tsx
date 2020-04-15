import React from "react";
import { Row } from "antd";
import Welcome from "./Sections/Welcome/Welcome";
import Portfolio from "./Sections/Portfolio/Portfolio";
import FollowUs from "./Sections/FollowUs/FollowUs";

const Frontpage: React.FC = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ justifyContent: "center", alignContent: "center" }}>
        <Welcome />
      </div>
      <Portfolio />

      <div style={{ justifyContent: "center", display: "flex" }}>
        <FollowUs />
      </div>
    </div>
  );
};

export default Frontpage;
