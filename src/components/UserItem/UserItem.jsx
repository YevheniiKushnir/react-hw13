import React from "react";
import styles from "./UserItem.module.css";

const UserItem = ({ name }) => {
  return <li className={styles.li}>{name}</li>;
};

export default UserItem;
