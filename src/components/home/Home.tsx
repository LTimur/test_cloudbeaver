import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../../assets/logo.png"

export const Home = () => {
  const navigate = useNavigate();
  const handleRegistrationClick = () => {
    navigate("/registration");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.homeContainer}>
    <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleRegistrationClick}>Registration</button>
        <button className={styles.button} onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};