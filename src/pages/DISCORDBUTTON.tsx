import { FunctionComponent } from "react";
import styles from "./DISCORDBUTTON.module.css";

const DISCORDBUTTON: FunctionComponent = () => {
  return (
    <div className={styles.discordButton}>
      <div className={styles.property1default}>
        <img
          className={styles.property1defaultChild}
          alt=""
          src="/vector-404.svg"
        />
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.joinUsOnParent}>
            <div className={styles.joinUsOn}>JOIN US ON</div>
            <div className={styles.discord}>DISCORD</div>
          </div>
        </div>
      </div>
      <div className={styles.property1variant2}>
        <img
          className={styles.property1defaultChild}
          alt=""
          src="/vector-404.svg"
        />
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.joinUsOnParent}>
            <div className={styles.joinUsOn}>JOIN US ON</div>
            <div className={styles.discord}>DISCORD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DISCORDBUTTON;
