import React from "react";
import PropTypes from "prop-types";
import StatisticsListItem from "./StatisticsListItem";
import style from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.container}>
      {title && <h2 className={style.mainTitle}>{title.toUpperCase()}</h2>}
      <ul className={style.mainList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Statistics;
