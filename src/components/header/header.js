import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { ThemeContext } from "../../contexts";
import React from "react";

// @TODO вныести отлельно
const Menu = () => {
  return (
    <div>
      <Link to="/chat">Chat</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/gists">Gists</Link>
    </div>
  );
};

export const Header = () => {
  const {
    themeSetter,
    theme: { theme },
  } = useContext(ThemeContext);

  return (
    <div className={styles.header} style={{ background: theme.color }}>
      <Menu />
      <button onClick={() => themeSetter("light")}>light</button>
      <button onClick={() => themeSetter("dark")}>dark</button>
    </div>
  );
};
