import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { MessageList } from "./components/MessageList/MessageList";

ReactDOM.render(
  <>
    <div className="App container">
      <MessageList />
    </div>
  </>,

  document.getElementById("root")
);



