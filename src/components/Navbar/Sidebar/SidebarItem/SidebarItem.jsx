import React from 'react';
import classes from './../Sidebar.module.scss'

const SidebarItem = (props) => {
    return (
        <div><div className={classes.img}><img src={props.img} /></div> {props.name}</div>
    )
}
export default SidebarItem;