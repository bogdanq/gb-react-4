import { memo } from "react";
// import classNames from "classnames";

export const Message = memo(({ message }) => {
  const { author, textAreaValue } = message;

    return (
        <div className="d-flex flex-column mt-3 text-left">
          <h3>{textAreaValue}</h3>
          <p>{author}</p>
        </div>
      );
    });