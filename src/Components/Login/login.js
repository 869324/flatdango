import styles from "./login.module.css"

function Login(props) {
    const {setLoggedIn} = props;

    return (
        <div className={styles.login}>
            <form onSubmit={()=> setLoggedIn(true)}>
                <input name="username" placeholder="Username" required/>
                <input name="password" type="password" placeholder="Password" required/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;