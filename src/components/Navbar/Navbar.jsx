import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Navbar = (props) => {
    return (
        <div className={classes.nav}>
            <nav>
                <div className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
                <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
                <div className={classes.item}><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></div>
                <div className={classes.item}><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
                <div className={classes.item}><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
                <div className={classes.item}><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></div>
            </nav>
            <SidebarContainer />
        </div>
    )
}

export default Navbar;

