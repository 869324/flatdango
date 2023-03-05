import { useState } from "react";
import styles from "./add.module.css";
import axios from "axios";
import swal from "sweetalert";

function Add(props) {
  const { setAdd, fetchMovies } = props;

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/movies", formData)
      .then((res) => {
        setAdd(false);
        fetchMovies();
        swal({
          icon: "success",
          text: "Movie added",
        });
      })
      .catch((error) => {
        setAdd(false);
        swal({
          icon: "error",
          text: error.response.data.error,
        });
      });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={submit}>
        <h2>Add Movie</h2>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Title</label>
          <input
            name="title"
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
          <label className={styles.label}>Year</label>
          <input
            name="year"
            required
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label}>Poster URL</label>
          <input
            name="poster"
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.actions}>
          <button
            className={styles.cancel}
            type="button"
            onClick={() => setAdd(false)}
          >
            Cancel
          </button>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
