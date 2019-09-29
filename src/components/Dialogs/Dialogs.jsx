import React from 'react';
import classes from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsData.map( dialog => {
        return <DialogItem id={dialog.id} name={dialog.name} img={dialog.img} />;
    });
    let messagesElement = props.state.messagesData.map( message => <Message message={message.message} my={message.my} />);

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
               {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <textarea name="" id="" cols="30" rows="10" ref={newMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;