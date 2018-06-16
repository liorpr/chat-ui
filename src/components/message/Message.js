
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '../avatar/Avatar';

export default class Message extends PureComponent {  
  
  static propTypes = {
    username: PropTypes.string,
    message: PropTypes.string,
    avatar: PropTypes.string,
    isSelfMessage: PropTypes.bool
  };
  
  render() {
    const { username, message, avatar, isSelfMessage: self } = this.props;
    return (
      <li className={classNames('message-container', { self })}>
        <Avatar name={avatar} />
        <div className="content">
          <p className={classNames('box', { self })}>
            { message }
          </p>
          <div className={classNames('username', { self })}>
            { username }
          </div>
        </div>
      </li>
    );
  }
}