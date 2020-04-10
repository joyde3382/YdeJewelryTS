import React from "react";
import { Row, Col, Divider } from "antd";
import style from "./Foot.module.scss";

const About: React.FC = () => {
  return (
    <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
      <Row className={style.row}>
        <Col xs={16} style={{ textAlign: "left" }}>
          <h2>Title</h2>
          <p>Read Further</p>
        </Col>
        <Col xs={4} style={{ textAlign: "left" }}>
          <h3 className={style.headers}>Information</h3>
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
          <p>Shipping and Returns </p>
          <p>FAQ</p>
        </Col>
        <Col xs={4} style={{ textAlign: "left" }}>
          <h3 className={style.headers}>Address</h3>
          <p>4 Privet Drive</p>
        </Col>
      </Row>

      <Row>
        <Divider style={{ color: "#333", fontWeight: "normal" }}></Divider>
        <Col xs={16} style={{ textAlign: "left" }}>
          <p>(copyright) 2020 (name)</p>
        </Col>
        <Col xs={4} style={{ textAlign: "left" }}>
          <p>sdfasd</p>
        </Col>
        <Col xs={4} style={{ textAlign: "left" }}>
          <p>Payment methods</p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
