import React from "react";
import PropTypes from "prop-types";

const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default StatisticsListItem;
