import { useState, useEffect } from "react";
import { Message } from "./Message";
import { TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import "./styles/MessageList.css"



export const MessageList = () => {

    const [messages, setMessages] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState("");
    const [chats, setChats] = useState([
      {
        id: 1,
        Name: "Eric Theodore Cartman",
        Text: "Some Text",
        Img: "",
      },
      {
        id: 2,
        Name: "Kyle Broflovski",
        Text: "Some Text 2",
        Img: "",
      }
    ])

    const sendMessage = () => {
        if(textAreaValue) {
            setMessages((messages) => [...messages, { textAreaValue, author: "User" }]);
            setTextAreaValue("")
        }
    }

    const handlePressInput = ({ code }) => {
        if (code === "Enter" && textAreaValue) {
            sendMessage();
        }

      };

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        let timerId = null;

        if (lastMessage?.author === "User") {

            timerId = setTimeout(() => {
              setMessages((messages) => 
              [...messages, { textAreaValue: "In this you are right: " + lastMessage?.textAreaValue, author: "Bot" }]
              );
            }, 500);  
          }

          return () => {
            clearTimeout(timerId);
          };

    }, [messages])

    return (
        <>
        <Container fixed disableGutters>
                <Box className="d-flex w-100 mt-5">

                  <List className="w-25 mr-3">
                    {chats.map((el) => {
                      return  <ListItem disableGutters key={el.id} sx={{ borderBottom: '1px solid grey' }}>
                                <ListItemButton>
                                  
                                  <ListItemAvatar>
                                    <Avatar alt={el.Name} src={el.Img} />
                                  </ListItemAvatar>

                                  <ListItemText
                                  primary={el.Name}
                                  secondary={el.Text}
                                  />

                                </ListItemButton>
                              </ListItem>  
                      })
                    }


                  </List>
                  <div className="w-75">
                    <div className="h-100 w-100">
                      {messages.map((message, id) => (
                          <Message key={message.textAreaValue} message={message} />
                      ))}
                    </div>

                    <div className="d-flex w-100">

                        <TextField fullWidth id="standard-basic" variant="standard"
                          autoFocus
                          onKeyPress={handlePressInput}
                          value={textAreaValue}
                          onChange={(e) => setTextAreaValue(e.target.value)}
                          placeholder="Введите сообщение..."
                        />

                      <Send className="icon" onClick={sendMessage} />
                    </div>
                  </div>
                </Box>

            </Container>
        </>

    );
}
