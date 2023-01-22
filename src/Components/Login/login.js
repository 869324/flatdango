import styles from "./login.module.css";

function Login(props) {
  const { setLoggedIn } = props;

  return (
    <div className={styles.login}>
      <form onSubmit={() => setLoggedIn(true)} className={styles.form}>
        <input
          name="username"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default Login;
