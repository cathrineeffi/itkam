import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthLogin, setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthLogin();
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

export default connect(mapStateToProps, {getAuthLogin})(HeaderContainer);

