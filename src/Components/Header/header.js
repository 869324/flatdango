import styles from "./header.module.css";
import { BiSearch } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

function Header(props) {
  const { setSearch, setAdd } = props;

  return (
    <div className={styles.header}>
      <h2>Movies</h2>

      <div className={styles.searchDiv}>
        <input
          className={styles.search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearch className={styles.searchIcon} size={21} />
      </div>

      <button className={styles.add} onClick={() => setAdd(true)}>
        Add Movie
      </button>
    </div>
  );
}

export default Header;
