import React from 'react';
import classes from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div className={classes.ProfileInfo}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1516658/e9ed962e-a32a-4668-a793-b3da9f8f3142/orig" width="80"/>
            <div>
                <p><b>My Name</b></p>
                <p>descripton</p>
            </div>
        </div>
    )
}

export default ProfileInfo;

