import styles from "./main.module.css";

export function MainTemplate({ chats, children }) {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{children}</div>
      </div>
    </div>
  );
}
