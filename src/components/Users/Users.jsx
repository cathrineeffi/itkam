import React from "react";
import userImage from './../../assets/user.png'
import classes from "./Users.module.scss";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <div className={classes.users}>
                {this.props.users.map(u => (
                        <div key={u.id} className={classes.user}>
                            <img src={u.image ? u.image : userImage} alt=""/>
                            <div className={classes.body}>
                                <p>{u.name}</p>
                                <span>{u.status ? u.status : 'Здесь должен быть статус'}</span>
                            </div>
                            {u.followed ?
                                <button className={classes.unfollow} onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                :
                                <button className={classes.follow} onClick={() => this.props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default Users