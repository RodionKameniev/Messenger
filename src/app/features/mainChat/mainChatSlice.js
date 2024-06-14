import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    User:{id:-1, name:"Saleha Jamshed"},
};

export const mainChatSlice = createSlice({
    name: 'mainChat',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.User=action.payload;
        }
    }
});

export const {setUser} = mainChatSlice.actions;

export default mainChatSlice.reducer;