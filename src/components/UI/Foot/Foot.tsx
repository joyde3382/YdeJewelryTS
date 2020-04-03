import React, { useContext } from "react";
import ContextStore from "../../../Context";
import { Layout } from "antd";
import style from "./Foot.module.scss";

const { Footer } = Layout;

const About: React.FC = () => {
  return (
    <Layout className="main-container">
      <Footer className={style.Position}>Footer</Footer>;
    </Layout>
  );
};

export default About;
