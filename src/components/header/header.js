import { useContext } from "react";
import styles from "./header.module.css";
import { ThemeContext } from "../../contexts";
import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const {
    themeSetter,
    theme: { theme },
  } = useContext(ThemeContext);

  return (
    <>
    <div>
      <Link to={`/profile`}>
        <button>profile page</button>
      </Link>
    </div>
    <div className={styles.header} style={{ background: theme.color }}>
      <button onClick={() => themeSetter("light")}>light</button>
      <button onClick={() => themeSetter("dark")}>dark</button>
    </div>
  </>
  );
};