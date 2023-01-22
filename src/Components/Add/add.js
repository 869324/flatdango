import { useState } from "react";
import styles from "./add.module.css";

function Add(props) {
  const { setAdd, addTransaction, transactions } = props;

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();

    const id =
      Math.max(...transactions.map((transaction) => transaction.id)) + 1;
    addTransaction({
      ...formData,
      id,
    });
    setAdd(false);
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={submit}>
        <h2>Add Transaction</h2>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Date</label>
          <input
            name="date"
            type="date"
            required
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Description</label>
          <input
            name="description"
            required
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Category</label>
          <input
            name="category"
            required
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Amount</label>
          <input
            name="amount"
            type="number"
            required
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Add;
