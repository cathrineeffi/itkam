import React from 'react';
import classes from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsData.map( dialog => {
        return <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} />;
    });
    let messagesElement = props.state.messagesData.map( message => <Message message={message.message} my={message.my} />);

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
               {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <textarea name="" id="" cols="30" rows="10" onChange={onMessageChange} value={props.state.newMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;