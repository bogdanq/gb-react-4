import React, {
    useState,
    useMemo,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
  } from "react";

import "../styles/App.css";

export default function App() {
    const [messageList, setMessageList] = useState([
        {
            author: "Bot",
            message: "Hello"
        }    
        ]);

    const [inputValue, setInputValue] = useState("");
    

    return (
        <>
            {
                messageList.map((message) => 
                <>
                    <div>User: {message.author}</div>
                    <div>Message: {message.message}</div>
                </>)
                
            }
            <input 
                placeholder="input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            ></input> 

            <button className="sendMessageBtn" onClick={() => console.log()}>
                Send Message
          </button>
        </>
    );
}

{/* <button className="sendMessageBtn" onClick={() => {
    setMessageList((state) => ({...state, message: "vast"}))
}}>
    Send Message
</button> */}

  //     {
    //         author: "Kenny",
    //         message: "(muffled) Gohthe!"
    //     },
    //     {
    //         author: "Cartman",
    //         message: "Screw You Guys, I'm Going Home!"
    //     }     
// setMessageList((prevmessageList) => prevmessageList);
