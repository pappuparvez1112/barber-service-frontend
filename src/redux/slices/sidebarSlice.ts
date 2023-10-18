import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface sidebarState {
  open: boolean;
}

// Define the initial state using that type
const initialState: sidebarState = {
  open: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showSidebarDrawer: (state) => {
      state.open = true;
    },
    onSidebarClose: (state) => {
      state.open = false;
    },
  },
});

export const { showSidebarDrawer, onSidebarClose } = sidebarSlice.actions;

export default sidebarSlice.reducer;
