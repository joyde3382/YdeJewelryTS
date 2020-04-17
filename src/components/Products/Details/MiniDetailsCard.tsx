import React from "react";
import { Card } from "antd";
import styles from "./Details.module.scss";
import roundImage from "../../../assets/coffee.jpg";
const MiniDetailsCard: React.FC = () => {
  return (
    <div className={styles.product}>
      <Card
        bordered={false}
        style={{ width: 100 }}
        bodyStyle={{ padding: 0 }}
        cover={<img src={roundImage} className={styles.roundedImage} />}
      >
        <p className={styles.cutTextSmall}>
          Some very interesting text that will enrich your life
        </p>
      </Card>
    </div>
  );
};

export default MiniDetailsCard;
