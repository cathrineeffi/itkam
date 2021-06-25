import React from 'react';
import {connect} from "react-redux";
import {addPost, getProfile, updateNewPostText} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Loader from "../Common/Loader/Loader";
import {Redirect, withRouter} from "react-router";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 17600;
        }
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />

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
        isAuth: state.auth.isAuth
    }
}

const WidthURLDataContainerComponent = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, {addPost, updateNewPostText, getProfile})(WidthURLDataContainerComponent);

export default ProfileContainer;

