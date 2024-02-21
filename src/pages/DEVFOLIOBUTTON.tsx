import { FunctionComponent } from "react";
import styles from "./DEVFOLIOBUTTON.module.css";

const DEVFOLIOBUTTON: FunctionComponent = () => {
  return (
    <div className={styles.devfolioButton}>
      <div className={styles.property1default}>
        <img
          className={styles.property1defaultChild}
          alt=""
          src="/vector-404.svg"
        />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <div className={styles.devfolioParent}>
            <div className={styles.devfolio}>DEVFOLIO</div>
            <div className={styles.goToProjects}>GO TO PROJECTS</div>
          </div>
        </div>
      </div>
      <div className={styles.property1variant2}>
        <img
          className={styles.property1defaultChild}
          alt=""
          src="/vector-404.svg"
        />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <div className={styles.devfolioParent}>
            <div className={styles.devfolio}>DEVFOLIO</div>
            <div className={styles.goToProjects}>GO TO PROJECTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DEVFOLIOBUTTON;
