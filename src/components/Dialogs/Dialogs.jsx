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
    let dialogsData = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Maf'},
        {id: 4, name: 'LM'},
    ];
    let messagesData = [
        {id: 1, message: 'Hoi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'How are you??'}
    ];

    let dialogsElement = dialogsData.map( dialog => {
        return <DialogItem id={dialog.id} name={dialog.name} />;
    });
    let messagesElement = messagesData.map( message => <Message message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
               {dialogsElement}
            </div>
            <div className="messages">
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;