import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'screens/globalSlice';
import homeworkReducer from 'screens/HomeWork/homeworkSlice';

export default configureStore({
  reducer: {
    globalData: globalReducer,
    homework: homeworkReducer,
  },
});
