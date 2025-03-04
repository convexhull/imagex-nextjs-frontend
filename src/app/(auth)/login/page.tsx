// Libs
import Link from "next/link";
import Image from "next/image";
// Components
import LoginForm from "./LoginForm/LoginForm";
// Styles
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.Login}>
      <div className={classes["container"]}>
        <div className={classes["container__logo"]}>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={44} height={44} />
          </Link>
        </div>
        <h3 className={classes["log-in"]}>Login</h3>
        <h5 className={classes["wlcm-back"]}>Welcome back.</h5>
        <LoginForm />
        <p className={classes["container__signuplink"]}>
          Don&lsquo;t have an account? <Link href="/signup">Join </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
