import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./transactions.module.css";

function Transactions(props) {
  const { search } = props;

  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/transactions", {})
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (search && search !== "") {
      setFilteredTransactions(
        transactions.filter((transaction) => {
          return transaction.description
            .toLowerCase()
            .includes(search.toLowerCase());
        })
      );
    } else {
      setFilteredTransactions(transactions);
    }
  }, [search, transactions]);

  return (
    <div className={styles.transactions}>
      {filteredTransactions.map((transaction, id) => {
        return (
          <div className={styles.transaction} key={id}>
            <span className={styles.infoDiv}>
              <span className={styles.info}>
                <label className={styles.label}>ID:</label>
                <label className={styles.value}>{transaction.id}</label>
              </span>

              <span className={styles.info}>
                <label className={styles.label}>Date:</label>
                <label className={styles.value}>{transaction.date}</label>
              </span>

              <span className={styles.info}>
                <label className={styles.label}>Category:</label>
                <label className={styles.value}>{transaction.category}</label>
              </span>
            </span>

            <span className={styles.infoDiv}>
              <span className={styles.info}>
                <label className={styles.label}>Description:</label>
                <label className={styles.value}>
                  {transaction.description}
                </label>
              </span>

              <span className={styles.info}>
                <label className={styles.label}>Amount:</label>
                <label className={styles.value}> {transaction.amount}</label>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Transactions;
