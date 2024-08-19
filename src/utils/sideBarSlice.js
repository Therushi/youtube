import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleSidebar, closeMenu } = sideBarSlice.actions;
export default sideBarSlice.reducer;
