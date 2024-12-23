import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// 액션 생성자 내보내기
export const { increment, decrement } = counterSlice.actions;
// createSlice로 정의된 actions 객체에서 특정 액션 (increment, decrement) 구조 분해 할당(destructuring)
// 을 통해 추출한 뒤, export로 외부에서도 사용할 수 있도록 내보냄

// 상태 셀렉터 내보내기
export const selectCount = (state) => state.counter.value; // state / name(counter) / value (state 값)
// Redux 스토어의 상태를 참조하는 셀렉터 함수를 정의하여 내보냄

// 리듀서 내보내기
export default counterSlice.reducer;
