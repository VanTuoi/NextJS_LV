
// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios';


const initialState = {
  status: 'logout',           // 
  EM: '',                    // error messeger
  EC: '',                   // error code
  jwt: '',                 // json web token
}

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    }
  }
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;
