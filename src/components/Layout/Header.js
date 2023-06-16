import React from "react";
import HomeLogo from "../../assets/home.jpg";
import Arrow from "../../assets/arrow.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["home-icon"]}>
        <img src={HomeLogo} alt="home" />
      </div>
      <div className={styles.button}>
        <button>Ricerca Insegnante</button>
      </div>
      <div className={styles["arrow-icon"]}>
        <img src={Arrow} alt="arrow" />
      </div>
      <div className={styles.button}>
        <button>Risultati della ricerca</button>
      </div>
    </header>
  );
};

export default Header;
