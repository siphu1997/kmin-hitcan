import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "globalData",
  initialState: {
    userInfo: {
      name: "",
      role: ""
    }
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = globalSlice.actions;

export default globalSlice.reducer;
