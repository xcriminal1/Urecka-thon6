import { FunctionComponent } from "react";
import styles from "./Frame3.module.css";

const Frame3: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.venueParent}>
          <div className={styles.venue}>VENUE</div>
          <div className={styles.online}>ONLINE</div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        <div className={styles.venueParent}>
          <div className={styles.venue}>DURATION</div>
          <div className={styles.online}>2 HOURS</div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
