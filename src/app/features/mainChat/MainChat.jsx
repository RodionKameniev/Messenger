import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./MainChat.module.css"
import { Link } from 'react-router-dom';
import {

} from './mainChatSlice';
import Menu from '../navigation/Menu';
import Chat from '../chat/Chat';
function MainChat(){
    const dispatch = useDispatch();
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