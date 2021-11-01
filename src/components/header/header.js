import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { ThemeContext } from "../../contexts";
import { firebaseApp } from "../../api/firebase";
import React from "react";

const exist = () => {
  firebaseApp.auth().signOut();
};

// @TODO вныести отлельно
const Menu = ({ isAuth }) => {
  return (
    <div style={{ display: "flex" }}>
      {isAuth && (
        <>
          <Link to="/chat">Chat</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/gists">Gists</Link>
          <hr />
          <button onClick={exist}>exit</button>
        </>
      )}

      {!isAuth && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/sign-up">Sign up</Link>
        </>
      )}
    </div>
  );
};

export const Header = ({ session }) => {
  const isAuth = !!session?.email;
  const {
    themeSetter,
    theme: { theme },
  } = useContext(ThemeContext);

  return (
    <div className={styles.header} style={{ background: theme.color }}>
      <h1 style={{ color: "#fff" }}>{session?.email ?? ""}</h1>
      <hr />
      <Menu isAuth={isAuth} />
      <button onClick={() => themeSetter("light")}>light</button>
      <button onClick={() => themeSetter("dark")}>dark</button>
    </div>
  );
};
