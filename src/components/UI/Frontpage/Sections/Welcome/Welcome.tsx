import React, { useEffect, useState } from "react";
import desktopImage from "../../../../../assets/wideImage3.jpg";
import mobileImage from "../../../../../assets/wideImage3-mobile.png";
import styles from "./Welcome.module.scss";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={styles.App} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.AppContent}>
        <Card
          style={{ backgroundColor: "transparent", border: "transparent" }}
          className={styles.Card}
        >
          <h1 className={styles.TextStyling}>Handmade Jewelry</h1>
          <p className={styles.paragraph}>
            Another extremely interesting paragraph that will hit you with the
            awe and amazement of this brilliant website
          </p>
          <Button>
            <Link to="/products">ShopAll</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Welcome;
