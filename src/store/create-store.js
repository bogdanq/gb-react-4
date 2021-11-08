import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  getGistsApi,
  searchGistsByUserNameApi,
  getMessagesApi,
  senMessageApi,
  getConversationsApi,
} from "../api";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import { sessionReducer } from "./session";
import {
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

export const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
  session: sessionReducer,
});

const persistreducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistreducer,
  composeEnhancers(
    applyMiddleware(
      timeScheduler,
      crashReporter,
      thunk.withExtraArgument({
        getGistsApi,
        searchGistsByUserNameApi,
        getMessagesApi,
        senMessageApi,
        getConversationsApi,
      }),
      logger,
      botSendMessage
    )
  )
);

export const persistor = persistStore(store);
