import React from "react";
import styles from "./Registration.module.css";

export function Registration() {
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
