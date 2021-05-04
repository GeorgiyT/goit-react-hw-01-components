import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistoryRow.module.css";

const TransactionHistoryRow = ({ type, amount, currency, index }) => {
  return (
    <tr className={styles.tableRow} style={index % 2 ? { backgroundColor: "lightgray" } : {}}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default TransactionHistoryRow;
