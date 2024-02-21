import { FunctionComponent } from "react";
import styles from "./MobileWebAppMenu.module.css";

const MobileWebAppMenu: FunctionComponent = () => {
  return (
    <div className={styles.mobileWebAppMenu}>
      <div className={styles.navlinkParent}>
        <div className={styles.navlink}>
          <div className={styles.text}>Home</div>
        </div>
        <div className={styles.navlink}>
          <div className={styles.text}>
            <p className={styles.aboutUs}>ABOUT US</p>
          </div>
        </div>
        <div className={styles.navlink}>
          <div className={styles.text}>RULES</div>
        </div>
        <div className={styles.navlink}>
          <div className={styles.text}>FAQ</div>
        </div>
        <div className={styles.navlink}>
          <div className={styles.text}>PRIZES</div>
        </div>
        <div className={styles.navlink}>
          <div className={styles.text}>SPONSORS</div>
        </div>
      </div>
    </div>
  );
};

export default MobileWebAppMenu;
