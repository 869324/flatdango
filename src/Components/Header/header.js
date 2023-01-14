import styles from "./header.module.css";

function Header(props) {
  const { setSearch } = props;

  return (
    <div className={styles.header}>
      <h1>Transactions</h1>

      <input
        name="search"
        placeholder="Search ..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <button>Add</button>
    </div>
  );
}

export default Header;
