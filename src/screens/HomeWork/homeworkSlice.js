import { createSlice } from '@reduxjs/toolkit';

export const homeworkSlice = createSlice({
  name: 'homeworkSlice',
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = homeworkSlice.actions;

export default homeworkSlice.reducer;
