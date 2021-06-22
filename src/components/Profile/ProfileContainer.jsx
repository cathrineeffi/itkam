import React from 'react';
import {connect} from "react-redux";
import {addPost, setUserProfile, toggleIsFetching, updateNewPostText} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Loader from "../Common/Loader/Loader";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/api";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 17600;
        }
        this.props.toggleIsFetching(true)
        profileAPI.getProfile(userId).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUserProfile(data);
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

const WidthURLDataContainerComponent = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile, toggleIsFetching})(WidthURLDataContainerComponent);

export default ProfileContainer;

