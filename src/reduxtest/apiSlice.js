import { createSlice } from "@reduxjs/toolkit";

// 슬라이스 생성
const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    apiSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    apiError: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const selectData = (state) => state.api.data;
export const selectError = (state) => state.api.error;

export const { apiSuccess, apiError } = apiSlice.actions;
export default apiSlice.reducer;
