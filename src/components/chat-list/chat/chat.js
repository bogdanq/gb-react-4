import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { lastMessageSelector } from "../../../store/messages";
import styles from "./chat.module.css";
import { useDispatch } from "react-redux";
import { deleteConversationWithThunk } from "../../../store/conversations";
import Outlined from '@mui/icons-material/DeleteOutlined'

const useStyles = makeStyles((theme) => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function Chat({ title, selected, handleListItemClick }) {
  const s = useStyles();
  const dispatch = useDispatch();
  const lastMessage = useSelector(lastMessageSelector(title));


  const deleteConversation = (roomId) => {
    dispatch(deleteConversationWithThunk(roomId));
  }

  return (
    <ListItem
      className={s.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon >
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <div key={title} className={styles.roomTitle}>
        <ListItemText className={styles.text} primary={title}/>  
        <Outlined color="primary" onClick={() => deleteConversation(title)}></Outlined>     
        </div>
 
        {lastMessage && (
          <>
            
            <ListItemText
              className={styles.text}
              primary={`${lastMessage.author}: ${lastMessage.value}`}
            />
            <ListItemText
              className={styles.text, styles.time}
              primary={ new Date().toLocaleTimeString().slice(0,-3) }
            />
            <ListItemText
              className={styles.text}
              primary={ new Date().toISOString().slice(0, 10) }
            />
          </>
        )}
      </div>
    </ListItem>
  );
}