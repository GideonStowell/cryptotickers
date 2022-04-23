// UI component for the SignInSignUp page
import styles from "../styles/Home.module.css";
import { auth } from "@lib/firebase";
export default function SignInSignUp({ props }) {
  return (
    <div className="box-center">
      <input type="text" />
      <input type="text" />
      <button
        className={styles.button}
        onClick={() => auth.signInAnonymously()}
      >
        Sign In
      </button>
      <button className={styles.button}>Sign Up</button>
    </div>
  );
}
