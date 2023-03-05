import { useEffect, useState } from "react";
import styles from "./movies.module.css";
import axios from "axios";
import Header from "../Header/header";
import Add from "../Add/add";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";

function Movies(props) {
  const {} = props;

  const [search, setSearch] = useState(null);
  const [add, setAdd] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  function fetchMovies() {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (search && search !== "") {
      setFilteredMovies(
        movies.filter((movie) => {
          return (
            movie.description.toLowerCase().includes(search.toLowerCase()) ||
            movie.title.toLowerCase().includes(search) ||
            movie.year.includes(search)
          );
        })
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [search, movies]);

  const deleteMovie = (movie) => {
    axios
      .delete(`http://localhost:3000/movies/${movie.id}`)
      .then((res) => {
        fetchMovies();
        swal({
          icon: "success",
          text: "Movie deleted",
        });
      })
      .catch((error) => {
        swal({
          icon: "error",
          text: error.response.data.error,
        });
      });
  };

  return (
    <div className={styles.main}>
      {add && <Add setAdd={setAdd} fetchMovies={fetchMovies} />}

      <Header setSearch={setSearch} setAdd={setAdd} />

      <div className={styles.movies}>
        {filteredMovies.map((movie, id) => {
          return (
            <div className={styles.movie} key={id}>
              <img className={styles.poster} src={movie.poster} />

              <span className={styles.infoDiv}>
                <span className={styles.info}>
                  <label className={styles.title}>{`${id + 1}:  ${
                    movie.title
                  }`}</label>
                  <label className={styles.year}>{`(${movie.year})`}</label>
                </span>

                <p className={styles.desc}>{movie.description}</p>
              </span>

              <MdDelete
                className={styles.delete}
                size={49}
                onClick={() => deleteMovie(movie)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
