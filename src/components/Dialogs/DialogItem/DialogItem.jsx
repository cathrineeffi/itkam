import React from 'react';
import classes from './../Dialogs.module.scss'
import NavLink from "react-router-dom/es/NavLink";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={classes.item} activeClassName={classes.active}>
            {props.name}
        </NavLink>
    )
}

export default DialogItem;