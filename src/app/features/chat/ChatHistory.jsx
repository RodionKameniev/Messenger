import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./Chat.module.css"
import { Link } from 'react-router-dom';
import {

} from './chatSlice';


function ChatHistory() {
    const dispatch = useDispatch();
    return (
        <div className={`${style.ChatHistory}`}>
            <div className={`${style.MassageLeft}`}>
                <div className='Photo48Size'>
                </div>
                <div className={`${style.MassageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MassageRight}`}>
                <div className={`${style.MassageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
                <div className='Photo48Size'>
                </div>
            </div>
            <div className={`${style.MassageLeft}`}>
                <div className='Photo48Size'>
                </div>
                <div className={`${style.MassageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MassageRight}`}>
                <div className={`${style.MassageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
                <div className='Photo48Size'>
                </div>
            </div>
            <div className={`${style.MassageLeft}`}>
                <div className='Photo48Size'>
                </div>
                <div className={`${style.MassageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MassageRight}`}>
                <div className={`${style.MassageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
                <div className='Photo48Size'>
                </div>
            </div>
            <div className={`${style.MassageLeft}`}>
                <div className='Photo48Size'>
                </div>
                <div className={`${style.MassageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MassageRight}`}>
                <div className={`${style.MassageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
                <div className='Photo48Size'>
                </div>
            </div>
            <div className={`${style.MassageLeft}`}>
                <div className='Photo48Size'>
                </div>
                <div className={`${style.MassageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MassageRight}`}>
                <div className={`${style.MassageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
                <div className='Photo48Size'>
                </div>
            </div>
            <div className={`${style.MassageLeft}`}>
                <div className='Photo48Size'>
                </div>
                <div className={`${style.MassageTextLeft}`}>
                    <div className={`${style.TextLeft}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeLeft}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${style.MassageRight}`}>
                <div className={`${style.MassageTextRight}`}>
                    <div className={`${style.TextRight}`}>
                        <span>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</span>
                    </div>
                    <div className={`${style.TimeRight}`}>
                        <span>3:17 PM</span>
                    </div>
                </div>
                <div className='Photo48Size'>
                </div>
            </div>
        </div>
    )
}
export default ChatHistory;