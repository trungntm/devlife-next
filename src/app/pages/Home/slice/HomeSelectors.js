import { initialState } from './HomeSlice';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = state => state?.home || initialState;
export const selectHome = createSelector([selectSlice], state => state);
