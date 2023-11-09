import React from "react";
import styles from "./Login.module.css";
import { observer } from "mobx-react";
import { authStore } from "../../AuthStore";

export const Login = observer(() => {
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    authStore.setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    authStore.setPassword(e.target.value);
  };
  return (
    <div className={styles.loginContainer}>
      <form className={styles.form}>
        <div className={styles.label}>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            name="login"
            value={authStore.login}
            onChange={handleLoginChange}
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={authStore.password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
});
