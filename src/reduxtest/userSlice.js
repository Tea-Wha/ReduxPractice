import { createSlice } from "@reduxjs/toolkit";

// 슬라이스 생성
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    set_name: (state, action) => {
      state.name = action.payload;
    },
  },
});

// 액션 생성자 내보내기
export const { set_name } = userSlice.actions;

// 상태 셀렉터 내보내기
export const selectName = (state) => state.user.name; // state / name(user) / state 값 (name)

// 리듀서 내보내기
export default userSlice.reducer;
