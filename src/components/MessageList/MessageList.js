import { useState, useEffect } from "react";
import { Message } from "./Message";
import "./styles/MessageList.css"

export const MessageList = () => {

    const [messages, setMessages] = useState([
        { author: "Bot", message: "Hello!" }
    ]);
    const [textAreaValue, setTextAreaValue] = useState("");

    const sendMessage = () => {
        if(textAreaValue) {
            setMessages((messages) => [...messages, { textAreaValue, author: "User" }]);
            setTextAreaValue("")
        }  
    }

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        let timerId = null;

        if (lastMessage?.author === "User") {

            timerId = setTimeout(() => {
              setMessages((messages) => [...messages, { textAreaValue: "Hello, " + lastMessage?.author, author: "Bot" }]);
            }, 500);

          }

          return () => {
            clearInterval(timerId);
          };

    }, [messages])

    return (
        <>
            <div>
            {messages.map((message, id) => (
                <Message key={message.textAreaValue} message={message} />
            ))}
            </div>

            <input
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                placeholder="Введите сообщение..."
            ></input>

            <button className="sendMessageBtn w-100" onClick={sendMessage}>Send</button>
        </>

    );
}
 // <div className="d-flex ml-5 mt-5 justify-content-around">
        //     <div className="d-flex flex-column mx-5">
        //         <textarea className="my-3"
        //             placeholder="Message"
        //             value={textareaValueMessage}
        //             onChange={(e) => setTextareaValueMessage(e.target.value)}
        //         ></textarea> 

        //         <button className="sendMessageBtn w-100" onClick={handleSendMessage}>
        //             Send Message
        //         </button>
        //     </div>

        //     <div className="d-flex flex-column align-items-center mx-5">
        //         <Message />
               // {
                //    messageList.map((message) => 
                 //       <div className="d-flex flex-column mt-3 text-left">
                  //          <div>User: {message.author}</div>
                  //          <div>Message: {message.message}</div>
                  //      </div>
                  //  )
          //      }
        //</div>
        //</div>

