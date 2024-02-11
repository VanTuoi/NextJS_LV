// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import auth from './features/auth/auth-slice'
import loader from './features/load/loader-slice'
import auth_1 from './features/dashboard/auth-slice'

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        user: auth.reducer,
        loader: loader.reducer,
        user_2: auth_1.reducer,
    },
});

export default store;
