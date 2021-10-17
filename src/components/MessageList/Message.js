import { memo } from "react";
import classNames from "classnames";
import styles from "./styles/message.module.css";


export const Message = memo(({ message }) => {
  const { author, textAreaValue } = message;

    return (
        <div className={classNames(styles.message, {
          [styles.currentMessage]: author === "User",
        })}>
          <h3>{textAreaValue}</h3>
          <p>{author}</p>
          <p>{ new Date().toLocaleTimeString().slice(0,-3) }</p>
        </div>
      );
    });