import { memo } from "react";

export const Message = memo(({ message }) => {
  const { author, textAreaValue } = message;

    return (
        <div className="d-flex flex-column mt-3 text-left">
          <h3>{textAreaValue}</h3>
          <p>{author}</p>
          <p>12.03</p>
        </div>

                // <div
        //   className={classNames(styles.message, {
        //     [styles.currentMessage]: author === "User",
        //   })}
        // >
      );
    });