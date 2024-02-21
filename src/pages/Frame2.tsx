import { FunctionComponent } from "react";
import styles from "./Frame2.module.css";

const Frame2: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default Frame2;
