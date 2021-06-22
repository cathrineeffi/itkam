import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, toggleFolowingProgress
} from "../../redux/users-reduсer";
import Loader from "../Common/Loader/Loader";
import {usersAPI} from "../../api/api";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(p, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader/> :
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        currentPage={this.props.currentPage}
                        toggleFolowingProgress={this.props.toggleFolowingProgress}
                        folowingInProgress={this.props.folowingInProgress}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        folowingInProgress: state.usersPage.folowingInProgress
    }
}

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFolowingProgress})(UsersAPIContainer);

export default UsersContainer