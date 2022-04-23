import styles from "../styles/Home.module.css";
import { auth, signInWithPopup, googleAuthProvider } from "@lib/firebase";
import { useState } from "react";
export default function Enter({ props }) {
  const [user, setUser] = useState();
  console.log(user);

  const handleChildChange = newValue => {
    setUser(newValue);
  };
  // 1. User signed in
  // 2. User not sign in
  return (
    <main>
      {!user ? (
        <SignInButton handler={handleChildChange} />
      ) : (
        <SignOutButton handler={handleChildChange} />
      )}
    </main>
  );
}

const SignInButton = props => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      props.handler(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="btn-google" onClick={signInWithGoogle}>
        <img src="/google.png" width="30px" /> Sign in with Google
      </button>
    </>
  );
};

const SignOutButton = props => {
  const signOut = () => {
    auth.signOut();

    props.handler(null);
  };
  return (
    <>
      <button className="btn-signout" onClick={signOut}>
        Sign Out
      </button>
    </>
  );
};
