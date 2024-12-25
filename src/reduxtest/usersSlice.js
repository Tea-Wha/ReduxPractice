import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API 호출을 처리하는 비동기 Thunk
// createAsyncThunk를 사용하는 것이 최신 문법
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers", // sliceName/actionName
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice 정의, 생성
// 예전 스타일의 코드(?) -> 이 코드에서는 type 명시 필요 없음 (이게 최신?)
// 최신 문법
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
