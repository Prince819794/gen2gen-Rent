import React from "react";
import styles from "./styles.module.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const User = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.detail}>
      <AccountCircleOutlinedIcon style={{fontSize:"4rem"}} />
        <h3  className={styles.name}>Hi Prince <br /> <span style={{fontSize:"0.8rem"}}>G score:200</span> </h3>
      </div>
      <div className={styles.wallet}>💸 500.00</div>
    </div>
  );
};

export default User;
