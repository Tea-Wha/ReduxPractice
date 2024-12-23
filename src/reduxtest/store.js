import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import usersReducer from "./usersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

// "redux-persist/lib/storage" -> 껐다 켜도 계속 저장되어있음
// "redux-persist/lib/storage/session" -> 껐다 킬 시 초기화되어있음

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("디스패치된 액션 : ", action);
  const result = next(action);
  console.log("디스패치 후 상태 : ", store.getState());
  return result;
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

const store = configureStore({
  reducer: {
    counter: persistedReducer,
    user: userReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
