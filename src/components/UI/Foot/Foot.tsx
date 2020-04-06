import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { Layout, Row, Col } from "antd";
import style from "./Foot.module.scss";

const About: React.FC = () => {
  return (
    <div>
      <Row className={style.row}>
        <Col className={style.column}>
          <p>Read Further</p>
        </Col>
        <Col className={style.column}>
          <h3>Logo/Name</h3>
        </Col>
        <Col className={style.column}>
          <p>Interesting story bro</p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
