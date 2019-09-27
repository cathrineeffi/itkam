import React from 'react';
import classes from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map( dialog => {
        return <DialogItem id={dialog.id} name={dialog.name} />;
    });
    let messagesElement = props.messagesData.map( message => <Message message={message.message} />);

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