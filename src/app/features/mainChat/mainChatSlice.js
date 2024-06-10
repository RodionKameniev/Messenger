import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    adminStatus: "",
    UserList: [],
    EUser: {},
    UserStatus: "",
};

export const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {

    }
});
export default mainPageSlice.reducer;