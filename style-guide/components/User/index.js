import React from "react";
import styles from "./styles.module.css";
const User = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.detail}>
        <h4> logo|</h4>
        <div className={styles.name}>
          <h4> Hi Prinze</h4>
          <p>Gscore</p>
        </div>
      </div>
      <div className={styles.wallet}>💸 500.00</div>
    </div>
  );
};

export default User;
