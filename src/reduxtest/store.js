import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import usersReducer from "./usersSlice";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("디스패치된 액션 : ", action);
  const result = next(action);
  console.log("디스패치 후 상태 : ", store.getState());
  return result;
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
