import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./Registration.module.css"
import { Link, useNavigate } from 'react-router-dom';
import {
    setLogName,
    setLogPassWord,
    setRegDateOfBirth,
    setRegMail,
    setRegName,
    setRegPassWord,
    selectLogName,
    selectLogPassWord,
    selectRegDateOfBirth,
    selectRegMail,
    selectRegName,
    selectRegPassWord,
    registerAsync,
    selectLogStatus,
    selectRegStatus,
    setLogMail,
    selectLogMail,
    setRegStatus,
    logIn
} from './registrationSlice';
import Toast from 'react-bootstrap/Toast';
function Registration() {
    const dispatch = useDispatch();
    // const [option, setOption] = useState("none");
    // const [optionDisplay, setOptionDisplay] = useState("flex");
    const Navigate = useNavigate();
    const Name = useSelector(selectRegName);
    const LogName = useSelector(selectLogName);
    const LogMail = useSelector(selectLogMail);
    const Mail = useSelector(selectRegMail);
    const Password1 = useSelector(selectRegPassWord);
    const [Password2, setPassword2] = useState("");
    const MailLog = useSelector(selectLogMail);
    const PasswordLog = useSelector(selectLogPassWord);
    const DateOfBirth = useSelector(selectRegDateOfBirth);
    const [toastTop, setToastTop] = useState("110%");
    const [Menu, setMenu] = useState("register");
    const LogStatus = useSelector(selectLogStatus);
    const [FadeStatus, setFadeStatus] = useState("modal");
    const RegStatus = useSelector(selectRegStatus);
    function setBody() {
        if (Menu == "register") {
            return <Toast.Body>{RegStatus}</Toast.Body>
        }
        else {
            
            return <Toast.Body>{LogStatus}</Toast.Body>
        }
    }
    function setType() {
        if (Menu == "register") {
            if (RegStatus == "You have been registered!") {
                return <strong className="me-auto">Status</strong>
            }
            else {
                return <strong className="me-auto">Error</strong>
            }
        }
        else{
            if (LogStatus == "Successful LogIn!") {
                return <strong className="me-auto">Status</strong>
            }
            else {
                return <strong className="me-auto">Error</strong>
            }
        }
    }
    function callAnError() {
        setToastTop("90%");
        setTimeout(() => {
            setToastTop("110%");
        }, 5000)
    }
    function putLinkButton() {
        if (RegStatus == "You have been registered!" || LogStatus=="Successful LogIn!") {
            return <button onClick={() => {
                setTimeout(() => {
                    Navigate("/chat");
                }, 250);
            }} type="button" className="btn btn-primary SCGreen SButton" data-bs-dismiss="modal">To Chat</button>
        }
    }
    return (
        <div className='Page'>
            <div className='Window'>
                <div className={style.Registration}>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#registrationModal" className='btn btn-primary SCGreen BigText SButton'>Registration</button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#logInModal" className='btn btn-primary SCGreen BigText SButton'>Log In</button>
                </div>

                <div className="modal fade" id="registrationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Registration</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }} className="modal-body">
                                <span>Name:</span>
                                <input onChange={(e) => {
                                    dispatch(setRegName(e.target.value));
                                }} placeholder='Name' />
                                <span>Mail:</span>
                                <input onChange={(e) => {
                                    dispatch(setRegMail(e.target.value));
                                }} placeholder='Mail' />
                                <span>Password:</span>
                                <input onChange={(e) => {
                                    dispatch(setRegPassWord(e.target.value));
                                }} placeholder='Confirm Password' />
                                <input onChange={(e) => {
                                    setPassword2(e.target.value);
                                }} placeholder='Confirm Password' />
                                <span>Date of Birth:</span>
                                <input onChange={(e) => {
                                    console.log("Input:");
                                    console.log(e.target.value);
                                    let year = parseInt(e.target.value.slice(0, 4));
                                    let month = parseInt(e.target.value.slice(5, 7));
                                    let day = parseInt(e.target.value.slice(8, 10));
                                    let date = new Date(year, month - 1, day);
                                    //console.log(day+" "+month+" "+year);
                                    console.log(date.toLocaleString());
                                    dispatch(setRegDateOfBirth(date.toLocaleString()));
                                }} type='date' />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={() => {
                                    setMenu("register");
                                    console.log(Name + " " + Mail + " " + Password1 + " " + Password2 + " " + DateOfBirth);
                                    if (Password1.length < 8) {
                                        dispatch(setRegStatus("Password length need to be at least 8!"));
                                        callAnError();
                                        return;
                                    }
                                    if (Password1 != Password2) {
                                        dispatch(setRegStatus("Password confirmation is not the same!"));
                                        callAnError();
                                        return;
                                    }
                                    if (DateOfBirth == null || DateOfBirth == undefined || DateOfBirth == "") {
                                        dispatch(setRegStatus("Date Of Birth has not been selected!"));
                                        callAnError();
                                        return;
                                    }
                                    let year = parseInt(DateOfBirth.slice(6, 10));
                                    console.log("Date:");
                                    console.log(year + " " + (new Date().getFullYear() - 5))
                                    if (year > new Date().getFullYear() - 5) {
                                        dispatch(setRegStatus("Your age is too small, your Date of Birth need to be at least " + (new Date().getFullYear() - 5) + "!"));
                                        callAnError();
                                        return;
                                    }
                                    dispatch(registerAsync({ Name: Name, Password: Password1, Mail: Mail, DateOfBirth: DateOfBirth }));
                                    setTimeout(() => {
                                        console.log("Error: " + RegStatus);
                                        callAnError();
                                    }, 125);
                                }} type="button" className="btn btn-primary SCGreen SButton">Continue</button>
                                {putLinkButton()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="logInModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Log In</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }} className="modal-body">
                                <span>Name:</span>
                                <input onChange={(e) => {
                                    dispatch(setLogName(e.target.value));
                                }} placeholder='Name' />
                                <span>Mail:</span>
                                <input onChange={(e) => {
                                    dispatch(setLogMail(e.target.value));
                                }} placeholder='or Mail' />
                                <span>Password:</span>
                                <input onChange={(e) => {
                                    dispatch(setLogPassWord(e.target.value))
                                }} placeholder='Confirm Password' />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={() => {
                                    setMenu("logIn");
                                    console.log(LogName + " " + LogMail + " " + PasswordLog);
                                    dispatch(logIn({ Name: LogName, Password: PasswordLog, Mail: LogMail }));
                                    setTimeout(() => {
                                        console.log("Error: " + LogStatus);
                                        callAnError();
                                    }, 125);
                                }} type="button" className="btn btn-primary SCGreen SButton">Continue</button>
                                {putLinkButton()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <img src="..." class="rounded me-2" alt="..." />
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div> */}
                <div onClick={() => {
                    setToastTop("110%");
                }} style={{ top: `${toastTop}` }} className='Toast'>
                    <Toast>
                        <Toast.Header>
                            {setType()}
                        </Toast.Header>
                        {setBody()}
                    </Toast>
                </div>
            </div>
        </div>
    )
}
export default Registration;