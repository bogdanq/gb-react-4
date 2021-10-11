import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { useReducer, useState } from "react";
import { Header, MessageList } from "./components";
import "./global.css";

const reducer = (state, payload) => {
  switch (payload.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

const TestReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [isVisible, toogle] = useReducer((state) => !state, true);
  const [isVisible, toogle] = useState(true);

  return (
    <div>
      <button onClick={() => toogle(!isVisible)}>toogle</button>

      {isVisible && (
        <>
          <div>TestReducer {state.count}</div>
          <button onClick={() => dispatch({ type: "increment" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </button>
        </>
      )}
    </div>
  );
};

const dark = createTheme({});

const light = createTheme({
  theme: {
    color: "red",
  },
});

ReactDOM.render(
  <ThemeProvider theme={light}>
    <TestReducer />
    <Header />
    <MessageList />
  </ThemeProvider>,
  document.getElementById("root")
);
