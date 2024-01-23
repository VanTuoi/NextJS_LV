// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import auth from './features/auth-slice'
import loader from './features/loader-slice'

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        user: auth.reducer,
        loader: loader.reducer,
    },
});

export default store;
