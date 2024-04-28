import { configureStore } from '@reduxjs/toolkit';
import mainPageReducer from './features/mainPage/mainPageSlice';

export const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
  },
});
