import React from 'react';
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogs-reducer";
import Sidebar from './Sidebar'

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (body) => {
            dispatch(updateNewMessageActionCreator(body));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
