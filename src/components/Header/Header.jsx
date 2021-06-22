import React from 'react';
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";
import Loader from "../Common/Loader/Loader";

const Header = (props) => {
    console.log(props)
    return (
        <header className={classes.header}>
            <img src="https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png" width="100"/>
            <div className={classes.loginBlock}>
                {props.auth.isFetching ? <Loader/> :
                    props.auth.isAuth ?
                        props.auth.login
                        :
                        <NavLink to={'/login'}>
                            Login
                        </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;

