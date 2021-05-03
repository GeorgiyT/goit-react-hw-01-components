import React from "react";
import PropTypes from "prop-types";
import noImage from "../../image/no-image.png";

const Profile = ({ name, tag, location, avatar = noImage, stats: { followers, views, likes } }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={name} width="100px" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

// Дефолтный проп установлен при деструктуризации.
// Profile.defaultProps = {
//     avatar: noImage
// }

export default Profile;
