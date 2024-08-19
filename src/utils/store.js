import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";

const store = configureStore({
  reducer: {
    app: sideBarSlice,
  },
});

export default store;
