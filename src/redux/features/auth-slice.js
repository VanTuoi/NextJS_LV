
// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  status: 'logout',           // 
  EM: '',                    // error messeger
  EC: '',                   // error code
  jwt: '',                 // json web token
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutsuccess: (state, action) => {
      return { ...initialState }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = action.payload.EC !== 0 ? 'login fail' : 'login';
        state.EM = action.payload.EM;
        state.EC = action.payload.EC;
        state.jwt = action.payload.DT;
      })
  },
});

/*
  => pending
  => fullfilled
  => rejected
*/

export const login = createAsyncThunk('auth/loginsuccess', async (data) => {
  const response = await axios.post('http://localhost:8080/api/v1/login', {
    email: data.email,
    password: data.password,
  })
  return response.data;
});

export default auth;
