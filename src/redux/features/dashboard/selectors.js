
// third-party
import { createSelector } from '@reduxjs/toolkit';

export const drawerOpen_2 = (state) => state.user_2.drawerOpen;

export const getStatusAccount = createSelector(
    drawerOpen_2,
    (drawerOpen) => {
        return ({ drawerOpen })
    }
);
// import { createSelector } from '@reduxjs/toolkit';

// export const getstatus = (state) => state.user.status;
// export const getEM = (state) => state.user.EM;
// export const getEC = (state) => state.user.EC;
// export const getjwt = (state) => state.user.jwt;

// export const getStatusAccount = createSelector(
//     getstatus, getEM, getEC, getjwt,
//     (status, EM, EC, jwt) => {
//         return ({ status, EM, EC, jwt })
//     }
// );