import { useEffect, useState } from "react";
import styles from "./movies.module.css";

function Movies(props) {
  const {} = props;

  const [search, setSearch] = useState(null);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (search && search !== "") {
      setFilteredMovies(
        movies.filter((movie) => {
          return (
            movie.description.toLowerCase().includes(search.toLowerCase()) ||
            movie.year.includes(search)
          );
        })
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [search, movies]);

  return (
    <div className={styles.movies}>
      {filteredMovies.map((movie, id) => {
        return (
          <div className={styles.movie} key={id}>
            <span className={styles.infoDiv}>
              <span className={styles.info}>
                <label className={styles.label}>ID:</label>
                <label className={styles.value}>{movie.id}</label>
              </span>

              <span className={styles.info}>
                <label className={styles.label}>Title:</label>
                <label className={styles.value}>{movie.title}</label>
              </span>

              <span className={styles.info}>
                <label className={styles.label}>Year:</label>
                <label className={styles.value}>{movie.year}</label>
              </span>
            </span>

            <span className={styles.infoDiv}>
              <span className={styles.info}>
                <label className={styles.label}>Description:</label>
                <label className={styles.value}>{movie.description}</label>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
