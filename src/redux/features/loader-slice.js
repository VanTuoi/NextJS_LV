import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loader = createSlice({
  name: 'loader',
  initialState: {
    status: false,         // 
  },
  reducers: {
    setLoaderOn: (state, action) => {
      state.status = action.payload;         //
    },
    setLoaderOff: (state, action) => {
      state.status = false;         //
    },
  },
});

/*
  => pending
  => fullfilled
  => rejected
*/
export default loader;
