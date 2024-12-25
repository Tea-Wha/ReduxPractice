import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import usersReducer from "./usersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import apiReducer from "./apiSlice";
import apiMiddleware from "./apiMiddleware";

// "redux-persist/lib/storage" -> 껐다 켜도 계속 저장되어있음
// "redux-persist/lib/storage/session" -> 껐다 킬 시 초기화되어있음

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("디스패치된 액션 : ", action.type);
  console.log("현재 상태 : ", store.getState());
  const result = next(action);
  console.log("디스패치 후 상태 : ", store.getState());
  return result;
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
    user: persistedUserReducer,
    users: usersReducer,
    api: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, apiMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
