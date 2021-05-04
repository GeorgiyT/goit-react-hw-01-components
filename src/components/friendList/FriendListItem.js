import React from "react";
import PropTypes from "prop-types";
import noImage from "../../image/no-image.png";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar = noImage, name, isOnline }) => {
  return (
    <li className={styles.listItem}>
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
