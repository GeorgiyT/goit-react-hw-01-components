import React from "react";
import PropTypes from "prop-types";
import noImage from "../../image/no-image.png";

const FriendListItem = ({ avatar = noImage, name, isOnline }) => {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="100px" />
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
