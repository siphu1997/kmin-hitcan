import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "screens/globalSlice";

export default configureStore({
  reducer: {
    globalData: globalReducer
  }
});
