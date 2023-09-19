
import React from 'react';

export function UserDetails({ username, avatarUrl }){
  
  const style = {
    "display": "inline",
    "margin-right": "18px",
  }

  const photo = {
    "display": "inline",
    "height": '33px',
    "width": '33px',
    "border-radius": '12px',
  }

  return (
    <div style={style}>
      <p style={style}>{username}</p>
      <img src={avatarUrl}  alt="Avatar do usuário" style={photo}/>
    </div>
  );
};

export default UserDetails;
