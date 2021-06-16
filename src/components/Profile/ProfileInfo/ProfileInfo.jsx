import React from 'react';
import classes from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    return (
        <div className={classes.ProfileInfo}>
            <img src={props.profile.photos ? props.profile.photos.small : 'https://avatars.mds.yandex.net/get-pdb/1516658/e9ed962e-a32a-4668-a793-b3da9f8f3142/orig'} width="80"/>
            <div>
                <p><b>{props.profile.fullName}</b></p>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;

