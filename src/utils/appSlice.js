import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isToggle: true,
  },
  reducers: {
    addToggle: (state) => {
      state.isToggle = !state.isToggle;
    },
    addHamburger: (state) => {
      state.isToggle = false;
    }
  },
});

export const { addToggle,addHamburger} = appSlice.actions;
export default appSlice.reducer;
