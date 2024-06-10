import { configureStore } from '@reduxjs/toolkit';
import mainChatReducer from './features/mainChat/mainChatSlice';
import  registrationReducer from './features/registration/registrationSlice';
export const store = configureStore({
  reducer: {
    mainChat: mainChatReducer,
    registration: registrationReducer,
  },
});
