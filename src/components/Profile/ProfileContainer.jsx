import React from 'react';
import {connect} from "react-redux";
import {addPost, setUserProfile, toggleIsFetching, updateNewPostText} from "../../redux/profile-reducer";
import Profile from "./Profile";
import * as axios from "axios";
import Loader from "../Common/Loader/Loader";
import {withRouter} from "react-router";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 17600;
        }
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
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

const WidthURLDataContainerComponent = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile, toggleIsFetching})(WidthURLDataContainerComponent);

export default ProfileContainer;

