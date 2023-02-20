import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarOpenState: false,
  }

  export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
      toggleSidebar: (state) => {
        
          state.sidebarOpenState = !state.sidebarOpenState
          // console.log(state.sidebarOpenState);
      }
    },
  })

  
const store = configureStore({
  reducer: sidebarSlice.reducer
});

export const actions = sidebarSlice.actions;

export default store;




