import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { createTheme } from "@mui/material";
import React from "react";
import { ChatPage } from "./pages";
import { CustomThemeProvider } from "./contexts";
// import { TestRoute } from "./components/test-route";
import "./global.css";

const themes = {
  light: createTheme({
    theme: {
      color: "#17212b",
    },
  }),
  dark: createTheme({
    theme: {
      color: "blue",
    },
  }),
};

const App = () => {
  return (
    <BrowserRouter>
      <CustomThemeProvider themes={themes} initialTheme="light">
        <Switch>
          <Route path="/chat">
            <ChatPage />
          </Route>

          <Route path="*">
            <h1>404 page</h1>
            <Link to="/chat">go to Chat</Link>
          </Route>
        </Switch>
      </CustomThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
