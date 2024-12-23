import {createSlice} from "@reduxjs/toolkit";

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

export const {set_name} = userSlice.actions;

export const selectName = (state) => state.user.name;

export default userSlice.reducer;
