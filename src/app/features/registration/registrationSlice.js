import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    adminStatus: "none",
    User: {id: -1},
    UserStatus: "",
    LogInfo: { Name: "", PassWord: "", Mail: "", Status: "" },
    LogStatus: "",
    RegInfo: { Name: "", PassWord: "", Mail: "", DateOfBirth: "", Status: "" },
    RegStatus: ""
};

export const registerAsync = createAsyncThunk(
    'register',
    async (state) => {
        // console.log("FirstDate:");
        // console.log(new Date().toLocaleString());
        // console.log("SecondDate:");
        // console.log(state.DateOfBirth.toLocaleString());
        const response = await axios.post('http://localhost:8080/User/registration', {
            dateOfRegistration: new Date().toLocaleString(),
            dateOfBirth: state.DateOfBirth.toLocaleString(),
            name: state.Name,
            password: state.Password,
            mail: state.Mail,
            status: "new value"
        });
        return response.data;
    }
);
export const logIn = createAsyncThunk(
    'logIn',
    async (state) => {
        // console.log("FirstDate:");
        // console.log(new Date().toLocaleString());
        // console.log("SecondDate:");
        // console.log(state.DateOfBirth.toLocaleString());
        const response = await axios.post('http://localhost:8080/User/logIn', {
            name: state.Name,
            password: state.Password,
            mail: state.Mail
        });
        return response.data;
    }
);


export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegName: (state, action) => {
            state.RegInfo.Name = action.payload;
        },
        setRegPassWord: (state, action) => {
            state.RegInfo.PassWord = action.payload;
        },
        setRegMail: (state, action) => {
            state.RegInfo.Mail = action.payload;
        },
        setRegStatus: (state, action) => {
            state.RegStatus= action.payload;
        },
        setRegDateOfBirth: (state, action) => {
            console.log("Output:");
            console.log(action.payload);
            state.RegInfo.DateOfBirth = action.payload;
        },
        setLogName: (state, action) => {
            state.LogInfo.Name = action.payload;
        },
        setLogPassWord: (state, action) => {
            state.LogInfo.PassWord = action.payload;
        },
        setLogMail: (state, action) =>{
            state.LogInfo.Mail = action.payload; 
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.pending, (state) => {
                console.log("loading");
                state.status = 'loading';
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                console.log("done all is ok");
                console.log(action.payload);
                state.RegStatus = action.payload.status;
                console.log(state.RegStatus);
                state.status = 'idle';
                if (action.payload.status == null) {
                    state.RegStatus = "something went wrong :^(";
                }
                if (action.payload.status == "User was Registered") {
                    state.User=action.payload.item;
                    localStorage.setItem("User", JSON.stringify(action.payload.item));
                    state.RegStatus = "You have been registered!";
                }
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.RegStatus="Some problems with server";
                console.log("rejected");
            })
            .addCase(logIn.pending, (state) => {
                console.log("loading");
                state.status = 'loading';
            })
            .addCase(logIn.fulfilled, (state, action) => {
                console.log("done all is ok");
                console.log(action.payload);
                state.LogStatus = action.payload.status;
                console.log(state.RegStatus);
                state.status = 'idle';
                if (action.payload.status == null) {
                    state.LogStatus = "something went wrong :^(";
                }
                if (action.payload.status == "Successful LogIn!") {
                    state.User=action.payload.item;
                    localStorage.setItem("User", JSON.stringify(action.payload.item));
                    state.LogStatus = "Successful LogIn!";
                    console.log("log+: "+state.LogStatus)
                }
            })
            .addCase(logIn.rejected, (state) => {
                state.LogStatus="Some problems with server";
                console.log("rejected");
            })
    }
});
export const {setRegStatus, setRegName, setRegPassWord, setRegMail, setRegDateOfBirth, setLogName, setLogPassWord, setLogMail} = registrationSlice.actions;
export const selectRegName = (state) => state.registration.RegInfo.Name;
export const selectRegPassWord = (state) => state.registration.RegInfo.PassWord;
export const selectRegMail = (state) => state.registration.RegInfo.Mail;
export const selectRegDateOfBirth = (state) => state.registration.RegInfo.DateOfBirth;
export const selectRegStatus = (state) => state.registration.RegStatus;
export const selectLogStatus = (state) => state.registration.LogStatus;
export const selectLogName = (state) => state.registration.LogInfo.Name;
export const selectLogPassWord = (state) => state.registration.LogInfo.PassWord;
export const selectLogMail = (state) => state.registration.LogInfo.Mail;
export default registrationSlice.reducer;