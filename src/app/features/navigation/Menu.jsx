import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from "./Menu.module.css"
import { Link } from 'react-router-dom';
import {

} from './menuSlice';


function Menu() {
    const dispatch = useDispatch();
    return (
        <div className={`${style.Menu}`}>
            <div className={`${style.MyUser}`}>
                <div style={{display: `flex`}}>
                    <div className='Photo48Size'>

                    </div>
                    <div className={`${style.MyUserInfo}`}>
                        <span className='BigText'>Saleha Jamshed</span>
                        <span>@saleha_123</span>
                    </div>
                </div>
                <span><img src='./imgs/ph_bell.svg' /></span>
            </div>
            <div className={`${style.MyMessages}`}>
                <span className='BigText'>Messages</span>
                <span className={`${style.Search}`}><img src='./imgs/Vector (2).svg' /> <input className={`${style.SearchInput}`} placeholder='Search' /></span>
                <div className={`${style.Users}`}>
                    <div className={`${style.User}`}>
                        <div className='Photo64Size'>

                        </div>
                        <div className={`${style.UserInfo}`}>
                            <span className='MiddleText'>
                                Meera
                            </span>
                            <span className='SmallText'>
                            Awesome! 🍨 I love chocolate chip cookie dough. Looking forward....
                            </span>
                        </div>
                        <div className={`${style.UserMassagesStats}`}>
                            <span style={{fontWeight: `300`}}>5s</span>
                            <span className={`${style.RedMassage}`}>1</span>
                            <span><img src='./imgs/charm_tick-double.svg' /></span>
                        </div>
                    </div>
                    <div className={`${style.User}`}>
                        <div className='Photo64Size'>

                        </div>
                        <div className={`${style.UserInfo}`}>
                            <span className='MiddleText'>
                                John
                            </span>
                            <span className='SmallText'>
                            Awesome! 🍨 I love chocolate chip cookie dough. Looking forward....
                            </span>
                        </div>
                        <div className={`${style.UserMassagesStats}`}>
                            <span style={{fontWeight: `300`}}>5h</span>
                            <span className={`${style.RedMassage}`}>2</span>
                            <span><img src='./imgs/charm_tick-double gray.svg' /></span>
                        </div>
                    </div>
                    <div className={`${style.User}`}>

                    </div>
                    <div className={`${style.User}`}>

                    </div>
                    <div className={`${style.User}`}>

                    </div>
                    <div className={`${style.User}`}>

                    </div>
                    <div className={`${style.User}`}>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Menu;