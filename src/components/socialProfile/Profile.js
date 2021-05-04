import React from "react";
import PropTypes from "prop-types";
import noImage from "../../image/no-image.png";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar = noImage, stats: { followers, views, likes } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.about__card}>
        <img className={styles.about__image} src={avatar} alt={name} />
        <p className={styles.about__nameText}>{name}</p>
        <p className={styles.about__simpleText}>@{tag}</p>
        <p className={styles.about__simpleText}>{location}</p>
      </div>
      <ul className={styles.stats__list}>
        <li className={styles.stats__listItem}>
          <span>Followers</span>
          <br />
          <span>{followers}</span>
        </li>
        <li className={styles.stats__listItem}>
          <span>Views</span>
          <br />
          <span>{views}</span>
        </li>
        <li className={styles.stats__listItem}>
          <span>Likes</span>
          <br />
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
