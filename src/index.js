import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme } from "@mui/material";
import React from "react";
import { ChatPage, ProfilePage, GistsPage } from "./pages";
import { CustomThemeProvider } from "./contexts";
import { Header } from "./components";
import { store, persistor } from "./store";

import "./global.css";

const themes = {
  dark: createTheme({
    theme: {
      color: "#17212b",
    },
  }),
  light: createTheme({
    theme: {
      color: "#9e9e9e",
    },
  }),
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CustomThemeProvider themes={themes} initialTheme="dark">

            <Header />
            <Switch>
              <Route path="/chat">
                <ChatPage />
              </Route>

              <Route path="/profile">
                <ProfilePage />
              </Route>

              <Route path="/gists">
                <GistsPage />
              </Route>

              <Route path="*">
                <h1>404 page</h1>
                <Link to="/chat">go to Chat</Link>
              </Route>
            </Switch>

          </CustomThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
