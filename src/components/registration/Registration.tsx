import React from "react";
import styles from "./Registration.module.css";
import { observer } from "mobx-react";
import { authStore } from "../../AuthStore";
import { db } from "../../Database";

export const Registration = observer(() => {
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    authStore.setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    authStore.setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const login = authStore.login;
    const password = authStore.password;
    const createTimestamp = new Date();
    const updateTimestamp = new Date();
    alert(login);
    const insertQuery = `INSERT INTO users (login, password, create_timestamp, update_timestamp) VALUES ('${login}', '${password}', '${createTimestamp.toISOString()}', '${updateTimestamp.toISOString()}')`;

    db.run(
      insertQuery,
      [
        login,
        password,
        createTimestamp.toISOString(),
        updateTimestamp.toISOString(),
      ],
      (err) => {
        if (err) {
          console.error("Ошибка при вставке данных:", err);
        } else {
          console.log("Переводим на User Info");
        }
      }
    );

    db.close();
  };

  return (
    <div className={styles.registrationContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export default Registration;
