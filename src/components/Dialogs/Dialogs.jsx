import React from 'react';
import classes from './Dialogs.module.scss'
import NavLink from "react-router-dom/es/NavLink";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={classes.item} activeClassName={classes.active}>
            {props.name}
        </NavLink>
    )
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem id="1" name="Dimich" />
                <DialogItem id="2" name="Anna" />
                <DialogItem id="3" name="Maf" />
                <DialogItem id="4" name="LM" />
            </div>
            <div className="messages">
                <Message message="Hoi" />
                <Message message="Hello" />
                <Message message="Yo" />
                <Message message="How are you??" />
            </div>
        </div>
    )
}

export default Dialogs;