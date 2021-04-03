import React from 'react';
import './MyAccount.css';
import Avatar from '@material-ui/core/Avatar';
import user_icon from './image/user_icon.jpg';
import UserDetails from './UserDetails';



function MyAccount() {
    return (
        <div className="myAccount"> 
            <div className="myAccount__details">
                <Avatar 
                   className="myAccount__avatar"
                   src={user_icon}
                   alt="" 
                />
                <h3>Manasseh Ankrah</h3>               
            </div>          
                <hr />
                <UserDetails text="Subscriptions" num="500" />
                <hr />
                <UserDetails text="Uploads" num="50" />
                <hr />
                <UserDetails text="Likes" num="300" />
            
            
        </div>
    )
}

export default MyAccount;
