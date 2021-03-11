import React from "react";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.heading}>
          Rick <span>And</span> Morty
        </h1>
      </div>
    </>
  );
};
export default Header;
