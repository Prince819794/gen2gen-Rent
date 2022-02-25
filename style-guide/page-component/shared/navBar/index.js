import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/navImage.svg"
        alt="logo"
        height="100px"
        width="180px"
      />
    </div>
  );
};

export default Navbar;
