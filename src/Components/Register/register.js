import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import styles from "./register.module.css";

function Register(props) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const register = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3000/users", formData)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        swal({
          icon: "error",
          text: error.response.data.error,
        });
      });
  };

  return (
    <div className={styles.login}>
      <form onSubmit={register} className={styles.form}>
        <input
          name="firstname"
          placeholder="First Name"
          required
          className={styles.input}
          onChange={handleChange}
        />

        <input
          name="lastname"
          placeholder="Last Name"
          required
          className={styles.input}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          required
          className={styles.input}
          onChange={handleChange}
          type="email"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          onChange={handleChange}
        />
        <button className={styles.button}>Register</button>
      </form>
    </div>
  );
}

export default Register;
