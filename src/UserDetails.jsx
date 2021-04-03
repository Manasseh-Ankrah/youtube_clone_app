import React from 'react';
import './UserDetails.css';

function UserDetails({text,num}) {
    return (
        <div className="userDetails">
            <h5>{text} </h5>
            <h5> {num}</h5>
            
        </div>
    )
}

export default UserDetails
