import React from "react";
import TransactionHistoryRow from "./TransactionHistoryRow";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionHistoryRow key={id} type={type} amount={amount} currency={currency} index={index} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TransactionHistory;
