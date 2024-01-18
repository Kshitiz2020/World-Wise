import React from "react";
import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="cities" className={styles.navLink}>
            Cities
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="country" className={styles.navLink}>
            Countries
          </NavLink>
        </li>
        {/* <li className={styles.navItem}>
          <NavLink NavLink to="form" className={styles.navLink}>
            Form
          </NavLink> 
        </li>*/}
      </ul>
    </nav>
  );
}

export default AppNav;
