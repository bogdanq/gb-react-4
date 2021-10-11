import React, {
    useState,
    useEffect,
  } from "react";

import "../styles/App.css";

export default function App() {
    const [messageList, setMessageList] = useState([
        {
            author: "Bot",
            message: "Hello"
        }    
        ]);

    const [inputValueAuthor, setInputValueAuthor] = useState("");
    const [textareaValueMessage, setTextareaValueMessage] = useState("");


    function sendMessage() {
        setMessageList([...messageList, 
            {author: inputValueAuthor, message: textareaValueMessage}, 
            {author: "bot", message: "Hello, " + inputValueAuthor}])
    }

    useEffect(() => {
        
        setInputValueAuthor("")
        setTextareaValueMessage("")

    }, [messageList])

    return (
        <div className="d-flex ml-5 mt-5 justify-content-around">
            <div className="d-flex flex-column mx-5">
                <input 
                    placeholder="Author"
                    value={inputValueAuthor}
                    onChange={(e) => setInputValueAuthor(e.target.value)}
                ></input> 
                <textarea className="my-3"
                    placeholder="Message"
                    value={textareaValueMessage}
                    onChange={(e) => setTextareaValueMessage(e.target.value)}
                ></textarea> 

                <button className="sendMessageBtn w-100" onClick={sendMessage}>
                    Send Message
                </button>
            </div>

            <div className="d-flex flex-column align-items-center mx-5">
                {
                    messageList.map((message) => 
                        <div className="d-flex flex-column mt-3 text-left">
                            <div>User: {message.author}</div>
                            <div>Message: {message.message}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}