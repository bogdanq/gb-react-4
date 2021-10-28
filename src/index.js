import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme } from "@mui/material";
import React from "react";
import { ChatPage, ProfilePage, GistsPage } from "./pages";
import { Header } from "./components";

import { CustomThemeProvider } from "./contexts";
// import { TestRoute } from "./components/test-route";
import { store, persistor } from "./store";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* header */}
          <CustomThemeProvider themes={themes} initialTheme="light">
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
