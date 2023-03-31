import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { HomeActions as actions } from './HomeAction';
import { homeSaga } from './HomeSaga';

export const initialState = {
  text: '',
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    ...actions,
  },
});

export const { actions: homeActions } = slice;

export const useHomeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homeSaga });
  return { actions: slice.actions };
};
