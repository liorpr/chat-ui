
import React from 'react';

const getAvatarUrl = name => 
  `https://spotim-demo-chat-server.herokuapp.com/avatars/${name}.png`;

const Avatar = ({ name }) => (
  <img
    className="avatar-img"
    src={getAvatarUrl(name)}
    alt="avatar"
  />
);

export default Avatar;