import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLoginInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLoginInfo } = userSlice.actions;
export default userSlice.reducer;
