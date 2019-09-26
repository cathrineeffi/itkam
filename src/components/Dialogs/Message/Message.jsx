import React from 'react';
import classes from './../Dialogs.module.scss'

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

export default Message;