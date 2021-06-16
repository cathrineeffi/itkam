import React from 'react';
import {connect} from "react-redux";
import {addPost, setUserProfile, toggleIsFetching, updateNewPostText} from "../../redux/profile-reducer";
import Profile from "./Profile";
import * as axios from "axios";
import Loader from "../Common/Loader/Loader";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <>
                {this.props.profilePage.isFetching ? <Loader/> :
                    <Profile {...this.props.profilePage} />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const ProfileContainer = connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile, toggleIsFetching})(ProfileAPIContainer);

export default ProfileContainer;

