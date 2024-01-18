import React from "react";
import styles from "./AppLayout.module.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
