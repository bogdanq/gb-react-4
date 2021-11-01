import { nanoid } from "nanoid";
import { db } from "./firebase";

// const table = {
//   messages: {
//     1: [],
//     2: []
//   },
//   qwdwd: []
// }

export const getMessagesApi = () => db.ref("messages").get();

export const senMessageApi = (message, roomId) =>
  db
    .ref("messages")
    .child(roomId)
    .push({ ...message, id: nanoid() });
