import React from 'react';
import classes from './ProfileInfo.module.scss'
import profileAvatar from '../../../assets/profile-avatar.gif'

const ProfileInfo = (props) => {
    return (
        <div className={classes.ProfileInfo}>
            <img src={props.profile?.photos?.small ? props.profile.photos.small : profileAvatar} width="80"/>
            <div>
                <p><b>{props.profile.fullName}</b></p>
                <p className={classes.status}>{props.profile.aboutMe ? props.profile.aboutMe : 'Здесь должен быть статус'}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;

