import React from 'react';
import classes from './../Dialogs.module.scss'
import NavLink from "react-router-dom/es/NavLink";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={classes.item} activeClassName={classes.active}>
            <div className={classes.img}><img src={props.img} alt=""/></div>
            {props.name}
        </NavLink>
    )
}

export default DialogItem;