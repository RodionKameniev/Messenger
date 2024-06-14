import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./MainPage.module.css"
import { Link, NavLink } from 'react-router-dom';
import {

} from './mainPageSlice';
import MainChat from '../mainChat/MainChat';

function MainPage() {
    const dispatch = useDispatch();
    return (
        <div className={`${style.Page}`}>
            <div className={`${style.MenuBar}`}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img className='Photo64Size' src='./logo.png' />
                    <span className='SCGreen BigText'>Moon</span>
                </div>
                <div className={`${style.MainBar} SCWhite`}>
                    <div>
                        <span className='SButton'>Download</span>
                    </div>
                    <div>
                        <span className='SButton'>Contact us</span>
                    </div>
                    <div>
                        <span className='SButton'>Support</span>
                    </div>
                    <div>
                        <span className='SButton'>Safty</span>
                    </div>
                </div>
                <NavLink className="LinkCorrection" to="/registration">
                    <button className='SButton MiddleText'>Login</button>
                </NavLink>
            </div>
            <div className={`${style.Slide}`}>
                <span style={{width: "600px"}} className='SCGreen BigText'>New era of messegers. The same as others, but better.</span>
                <div className={`${style.SlideInfo}`}>
                    <span className='SCGreen BigText'>Register now:</span>
                    <NavLink className="LinkCorrection" to="/registration">
                        <button className='SButton BigText'>Registrate</button>
                    </NavLink>
                </div>
            </div>
            <span className='BigText SCGreen'>Preview:</span>
            <MainChat></MainChat>
        </div>
    )
}
export default MainPage;