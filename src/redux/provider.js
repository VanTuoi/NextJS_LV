'use client'

// third-party
import { Provider } from 'react-redux';

// project import
import store from '@/redux/store';

// ==============================|| IMPORT STORE TO APP ||============================== //

export default function DashboardLayout({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}