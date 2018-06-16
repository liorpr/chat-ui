
import React from 'react';
import PropTypes from 'prop-types';

const getAvatarUrl = name => 
  `https://spotim-demo-chat-server.herokuapp.com/avatars/${name}.png`;

const Avatar = ({ name }) => (
  <img
    className="avatar-img"
    src={getAvatarUrl(name)}
    alt="avatar"
  />
);

Avatar.propTypes = {
  name: PropTypes.string
};

export default Avatar;