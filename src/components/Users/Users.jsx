import React from "react";
import userImage from './../../assets/user.png'
import classes from "./Users.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <ul className={classes.pagination}>
                {pages.map(p => <li className={p == props.currentPage && classes.selected} onClick={() => props.onPageChanged(p)}>{p}</li>)}
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
                                            props.toggleFolowingProgress(true, u.id);
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "18d633de-1d3c-4640-be53-f62a0ce8243a"
                                                    }
                                                }
                                            ).then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.unfollow(u.id);
                                                    }
                                                    props.toggleFolowingProgress(false, u.id);
                                                }
                                            )
                                        }}
                                >
                                    Unfollow
                                </button>
                                :
                                <button disabled={props.folowingInProgress.some(id => id === u.id)}
                                    className={classes.follow}
                                    onClick={() => {
                                        props.toggleFolowingProgress(true, u.id);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "18d633de-1d3c-4640-be53-f62a0ce8243a"
                                                }
                                            }
                                        ).then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id);
                                                }
                                                props.toggleFolowingProgress(false, u.id);
                                            }
                                        )
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