import { FunctionComponent } from "react";
import styles from "./VenueOnlineLink.module.css";

const VenueOnlineLink: FunctionComponent = () => {
  return (
    <div className={styles.venueOnlineLinkContainer}>
      <p className={styles.venueOnline}>Venue: Online</p>
      <p className={styles.venueOnline}>Link for registration</p>
      <p className={styles.venueOnline}>Time duration</p>
    </div>
  );
};

export default VenueOnlineLink;
