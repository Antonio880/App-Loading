
import React from 'react';

export function UserDetails({ username, avatarUrl }){
  
  const style = {
    "display": "inline",
    "margin-right": "20px",
  }

  const photo = {
    "display": "inline",
    "height": '8%',
    "width": '8%',
    "border-radius": '15px',
  }

  return (
    <div style={style}>
      <p style={style}>{username}</p>
      <img src={avatarUrl} alt="Avatar do usuário" style={photo}/>
    </div>
  );
};

export default UserDetails;
