import React from 'react';
import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <div className={`${classes.item} ${classes.active}`}><a href="">Profile</a></div>
                <div className={classes.item}><a href="">Messages</a></div>
                <div className={classes.item}><a href="">News</a></div>
                <div className={classes.item}><a href="">Music</a></div>
            </div>
        </nav>
    )
}

export default Navbar;

