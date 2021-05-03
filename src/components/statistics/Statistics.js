import React from "react";
import PropTypes from "prop-types";
import StatisticsListItem from "./StatisticsListItem";

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>title</h2>}
      <ul>
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
