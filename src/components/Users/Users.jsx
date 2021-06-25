import React from "react";
import userImage from './../../assets/user.png'
import classes from "./Users.module.scss";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <ul className={classes.pagination}>
                {pages.map(p => <li key={p.id} className={p == props.currentPage && classes.selected} onClick={() => props.onPageChanged(p)}>{p}</li>)}
            </ul>
            <div className={classes.users}>
                {props.users.map(u => (
                        <div key={u.id} className={classes.user}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : userImage} alt=""/>
                            </NavLink>
                            <div className={classes.body}>
                                <p>{u.name}</p>
                                <span>{u.status ? u.status : 'Здесь должен быть статус'}</span>
                            </div>
                            {u.followed ?
                                <button disabled={props.folowingInProgress.some(id => id === u.id)}
                                        className={classes.unfollow} onClick={() => props.unfollow(u.id)}
                                        onClick={() => {
                                            props.unfollow(u.id)
                                        }}
                                >
                                    Unfollow
                                </button>
                                :
                                <button disabled={props.folowingInProgress.some(id => id === u.id)}
                                    className={classes.follow}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}
                                    >Follow</button>
                            }
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Users;