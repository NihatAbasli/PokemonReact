import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => {
  const {
    color = "danger",
    size = "medium",
    title = "button",
    children,
    fullwidth,
    onClick,
  } = props;

  // console.log(props);
  return (
    <button
      onClick={onClick}
      className={`${styles["btn"]} ${styles[color]} ${styles[size]}  ${
        fullwidth ? styles["full"] : ""
      }`}
    >
      {children || title}
    </button>
  );
};
