import React from 'react';
import classes from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.img} alt={''} />
            {props.txt}
            <span><img src="https://lh3.googleusercontent.com/i0mKBU9rHdZX1UOb6OOGIQ3HJweX2__QGYUW8bzaiVfg32KaXdPoDLnvcFfrhFHjYIQ" alt={''} />{props.likes ? props.likes : '0'}</span>
        </div>
    )
}

export default Post;

