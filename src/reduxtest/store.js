import { configureStore } from "@reduxjs/toolkit";

// Counter Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// User Reducer
const userReducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { name: action.payload };
    default:
      return state;
  }
};

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
