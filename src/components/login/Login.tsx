import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { observer } from "mobx-react";
import { authStore } from "../../AuthStore";

export const Login = observer(() => {
  const navigate = useNavigate();
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    authStore.setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    authStore.setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updateTimestamp = new Date();
    authStore.setUpdateTimestamp(updateTimestamp);
    navigate("/userinfo");
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
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
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
});
