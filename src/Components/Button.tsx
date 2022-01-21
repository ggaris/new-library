import React from "react";
import styles from "./Button.css";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <div className={styles.btn}>{label}</div>;
};

export default Button;
