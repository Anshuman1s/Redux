import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Reducers/UserReducers';

export const store = configureStore({
  reducer: {
    UserReducer: UserReducer
  },
});
