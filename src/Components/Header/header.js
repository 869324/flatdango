import styles from "./header.module.css";

function Header(props) {
  const { setSearch, setAdd } = props;

  return (
    <div className={styles.header}>
      <h1>Transactions</h1>

      <input
        name="search"
        placeholder="Search ..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setAdd(true)}>Add</button>
    </div>
  );
}

export default Header;
