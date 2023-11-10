import React from "react";
import styles from "./UserInfo.module.css";
import { authStore } from "../../AuthStore";

export function UserInfo() {
  return (
    <div className={styles.userInfoContainer}>
      <h2>User Info</h2>
      <React.Fragment>
        <div>
          <strong>Login:</strong> {authStore.login}
        </div>
        <div>
          <strong>Create Timestamp:</strong>{" "}
          {authStore.createTimestamp?.toLocaleString()}
        </div>
        <div>
          <strong>Update Timestamp:</strong>{" "}
          {authStore.updateTimestamp?.toLocaleString()}
        </div>
      </React.Fragment>
    </div>
  );
}