import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./MainChat.module.css"
import { Link } from 'react-router-dom';
import {
    setUser,
} from './mainChatSlice';
import Menu from '../mainPage/navigation/Menu';
import Chat from '../mainPage/chat/Chat';
function MainChat(){
    const dispatch = useDispatch();
    useEffect(()=>{
        let User=JSON.parse(localStorage.getItem("User"));
        console.log(User);
        if(User!=null && User!=undefined){
            setUser(User);
        }
    }, [])
    return(
        <div className='Page'>
            <div className='Window'>
                <Menu></Menu>
                <Chat></Chat>
            </div>
        </div>
    )
}
export default MainChat;