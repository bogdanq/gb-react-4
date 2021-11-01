import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  getGistsApi,
  searchGistsByUserNameApi,
  getMessagesApi,
  senMessageApi,
} from "../api";

import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import { sessionReducer } from "./session";
import {
  // thunk,
  logger,
  botSendMessage,
  crashReporter,
  timeScheduler,
} from "./midelwares";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile", "conversations"],
};

const persistreducer = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
    session: sessionReducer,
  })
);

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(
      timeScheduler,
      crashReporter,
      thunk.withExtraArgument({
        getGistsApi,
        searchGistsByUserNameApi,
        getMessagesApi,
        senMessageApi,
      }),
      logger,
      botSendMessage
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
