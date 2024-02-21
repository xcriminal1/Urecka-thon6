import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.vectorParent}>
      <img className={styles.frameChild} alt="" src="/vector-403.svg" />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
    </div>
  );
};

export default Frame;
