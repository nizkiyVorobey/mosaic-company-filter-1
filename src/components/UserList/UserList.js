import React from 'react';

export const UserList = ({ user }) => {
    return (
        <div key={user.company} className="user-list-item-row" >
            <div className="user-item"> {user.firstname} </div>
            <div className="user-item"> {user.lastname} </div>
            <div className="user-item"> {user.email} </div>
            <div className="user-item"> {user.phonenumber} </div>
            <div className="user-item"> {user.birthday_contact} </div>
            <div className="user-item"> {user.company} </div>
        </div>
    )
};
