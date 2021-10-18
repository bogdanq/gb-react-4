import { useContext } from "react";
import styles from "./header.module.css";
import { ThemeContext } from "../../contexts";
import React from "react";

export const Header = (props) => {
  const {
    themeSetter,
    theme: { theme },
  } = useContext(ThemeContext);

  return (
    <div className={styles.header} style={{ background: theme.color }}>
      <div>header</div>
      <button onClick={() => themeSetter("light")}>light</button>
      <button onClick={() => themeSetter("dark")}>dark</button>
    </div>
  );
};
