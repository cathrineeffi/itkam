import React from 'react';
import classes from './Sidebar.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props) => {
    let SidebarElement = props.sidebar.friends.map( friend => <SidebarItem  key={friend.id} img={friend.img} name={friend.name} />);

    return (
        <div className={classes.sidebar}>
            {SidebarElement}
        </div>
    )
}

export default Sidebar;
