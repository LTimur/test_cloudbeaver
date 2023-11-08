import React from "react";
import styles from "./Login.module.css";

export function Login() {
  return (
    <div className={styles.registrationContainer}>
      <form className={styles.form}>
        <div className={styles.label}>
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" name="login" />
        </div>
        <div className={styles.label}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
