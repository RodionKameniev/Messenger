import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./Chat.module.css"
import { Link } from 'react-router-dom';
import {

} from './chatSlice';
import ChatHistory from './ChatHistory';


function Chat() {
    const dispatch = useDispatch();
    return (
        <div className={`${style.Chat}`}>
            <div className={`${style.Profile}`}>
                <div style={{display: `flex`, alignItems: `center`}}>
                    <div className='Photo64Size'>

                    </div>
                    <span className={`${style.Name}`}>Name</span>
                </div>
                <div style={{display: `flex`, alignItems: `center`}}>
                    <span style={{margin: `8px`}}><img src='./imgs/material-symbols_call.svg' /></span>
                    <span style={{margin: `8px`}}><img src='./imgs/Vector.svg' /></span>
                    <span style={{margin: `4px`}}><img src='./imgs/bi_three-dots-vertical.svg' /></span>
                </div>
            </div>
            <ChatHistory/>
            <div className={`${style.Input}`}>
                <span style={{margin: `8px`}}><img src='./imgs/tdesign_attach.svg' /></span>
                <input className={`${style.MassageInput}`} placeholder='Type a massage'/>
                <span style={{margin: `8px`}}><img src='./imgs/mdi_emoji-outline.svg' /></span>
                <span style={{margin: `8px`}}><img src='./imgs/Vector (1).svg' /></span>
            </div>
        </div>
    )
}
export default Chat;