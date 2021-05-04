import React from "react";
import PropTypes from "prop-types";
import style from "./StatisticsListItem.module.css";
import styled from "styled-components";

const List = styled.li`
  background-color: ${props => props.color};
  color: bisque;
  padding: 10px;
  width: 100%;
`;

const StatisticsListItem = ({ label, percentage }) => {
  const randomColor = () => {
    return `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
  };

  return (
    <List color={randomColor()}>
      <span className={style.listLabel}>{label}</span>
      <span className={style.listValue}>{percentage}%</span>
    </List>
  );
};

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default StatisticsListItem;
