import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./message.module.css";
import { useParams } from "react-router";
import Outlined from '@mui/icons-material/DeleteOutlined'
import { deleteMessageWithThunk } from "../../../store/messages";
import { useDispatch } from "react-redux";

export const Message = memo(({ message }) => {
  const { author, value } = message;

  const { roomId } = useParams();

  const dispatch = useDispatch();

  
  const deleteMessage = (message) => {
    dispatch(deleteMessageWithThunk(message, roomId));
  }

  const deleteButton = (author) => {
    if(author === "User") {
      return <Outlined className="deleteIcon" color="primary" onClick={() => deleteMessage(message)}/>
    }
  }

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <div>
        <h3>{value}</h3>
        <span>{deleteButton(author)}</span>
      </div>
      <p>{author}</p>
      <p>{ new Date().toLocaleTimeString().slice(0,-3) }</p>
      <p>{ new Date().toISOString().slice(0, 10) }</p>
    </div>
  );
});

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  test: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
