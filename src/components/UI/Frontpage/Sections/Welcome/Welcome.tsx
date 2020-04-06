import React from "react";
import bgImage from "../../../../../assets/wideImage3.jpg";
import styles from "./Welcome.module.scss";

const Welcome: React.FC = () => {
  return (
    <div>
      <img className={styles.image} src={bgImage}>
        {/* <View style={styles.backdropView}>
        
        </View> */}
      </img>
    </div>
  );
};

export default Welcome;
