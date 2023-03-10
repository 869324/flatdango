import { NavLink } from "react-router-dom";
import styles from "./login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Login(props) {
  const { setUser } = props;

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        const users = res.data;

        const user = users.find(
          (u) => u.email == formData.email && u.password == formData.password
        );

        if (user) {
          setUser(user);
          navigate("/movies");
        } else {
          swal({
            icon: "error",
            text: "Invalid credentials",
          });
        }
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
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          name="email"
          placeholder="Email"
          required
          className={styles.input}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          onChange={handleChange}
        />
        <button className={styles.button}>Login</button>

        <NavLink to="/register">Register</NavLink>
      </form>
    </div>
  );
}

export default Login;
