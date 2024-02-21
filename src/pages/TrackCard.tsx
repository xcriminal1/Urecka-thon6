import { FunctionComponent } from "react";
import styles from "./TrackCard.module.css";

const TrackCard: FunctionComponent = () => {
  return (
    <div className={styles.trackCard}>
      <img className={styles.trackCardChild} alt="" src="/vector-405.svg" />
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/vector-406.svg" />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.trackNameParent}>
              <div className={styles.trackName}>TRACK NAME</div>
              <div className={styles.fintech}>FINTECH</div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet consectetur. Vivamus in cursus arcu viverra sed tempor non. Dolor dictumst porttitor fringilla tempor `}</div>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
