
// third-party
import { createSelector } from '@reduxjs/toolkit';
export const getstatusLoader = (state) => state.loader.status;

export const getStatusAccount = createSelector(
  getstatusLoader,
  (status) => {
    return ({ status })
  }
);