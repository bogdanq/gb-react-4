import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const myName = "test";
const myChildren = "123123123123";


ReactDOM.render(
  <>
    <div className="App">
      <App
        name={myName}
        component={<div>test component</div>}
      >
        {myChildren}
      </App>
    </div>
  </>,

  document.getElementById("root")
);



