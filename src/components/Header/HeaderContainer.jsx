import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";
import {profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        profileAPI.getAuthLogin().then(data => {
            if (data.resultCode === 0) {
                this.props.toggleIsFetching(false)
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);

