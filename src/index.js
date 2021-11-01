import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme } from "@mui/material";
import React, { useEffect } from "react";
import {
  ChatPage,
  ProfilePage,
  GistsPage,
  SignUpPage,
  LoginPage,
} from "./pages";
import { Header, PrivateRoute, PublicRoute } from "./components";
import { CustomThemeProvider } from "./contexts";
import { store, persistor } from "./store";
import { getMessagesFB } from "./store/messages";
import { sessionSelector, onAuthStateChanged } from "./store/session";

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
  const session = useSelector(sessionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onAuthStateChanged());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getMessagesFB());
  }, [dispatch]);

  const isAuth = !!session?.email;

  return (
    <>
      <Header session={session} />

      <Switch>
        <PrivateRoute path="/chat" isAuth={isAuth}>
          <ChatPage />
        </PrivateRoute>
        <PrivateRoute path="/profile" isAuth={isAuth}>
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute path="/gists" isAuth={isAuth}>
          <GistsPage />
        </PrivateRoute>

        <PublicRoute path="/login" isAuth={isAuth} to="/chat">
          <LoginPage />
        </PublicRoute>
        <PublicRoute path="/sign-up" isAuth={isAuth} to="/chat">
          <SignUpPage />
        </PublicRoute>

        <Route path="*">
          <h1>404 page</h1>
          <Link to="/chat">go to Chat</Link>
        </Route>
      </Switch>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <CustomThemeProvider themes={themes} initialTheme="light">
          <App />
        </CustomThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
