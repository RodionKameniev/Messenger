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
            <div className={`${style.MyUser}`}></div>
            <div className={`${style.MyMessages}`}>
                <span>Messages:</span>
                <span><img src='./imgs/circum_search.svg'/> <input placeholder='Search'/></span>
            </div>
        </div>
    )
}
export default Menu;