import React from "react";
import styles from "./UserInfo.module.css";

export function UserInfo() {
  const login = "Timur Ledenev";
  const createTimestamp = "2023-11-08";
  const updateTimestamp = "2023-11-08";

  return (
    <div className={styles.userInfoContainer}>
      <h2>User Info</h2>
      <div>
        <strong>Login:</strong> {login}
      </div>
      <div>
        <strong>Create Timestamp:</strong> {createTimestamp}
      </div>
      <div>
        <strong>Update Timestamp:</strong> {updateTimestamp}
      </div>
    </div>
  );
}
