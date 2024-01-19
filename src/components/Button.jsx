import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, type }) => {
  return (
    <div>
      <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
