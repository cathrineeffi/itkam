import React from 'react';
import classes from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsData.map( dialog => {
        return <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} />;
    });
    let messagesElement = props.state.messagesData.map( message => <Message message={message.message} my={message.my} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
               {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;