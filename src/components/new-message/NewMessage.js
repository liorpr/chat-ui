
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getRandomAvatar } from '../../services/utils';
import StorageService from '../../services/storage';
import Avatar from '../avatar/Avatar';

export default class NewMessage extends Component {
  
  static propTypes = {
    username: PropTypes.string,
    onUsernameChange: PropTypes.func,
    emitNewMessage: PropTypes.func
  };
  
  state = {
    message: '',
    avatar: null
  };
  
  componentDidMount() {
    let avatar = this.getStoredAvatar();
    if (!avatar) {
      avatar = getRandomAvatar();
      StorageService.saveAvatar(avatar);
    }
    
    this.setState({ avatar });
  }
  
  getStoredAvatar = () => {
    const { avatar } = StorageService.getItems();
    return avatar;
  }
  
  onMessageChange = e => {
    this.setState({ message: e.target.value });
  }
  
  onSubmit = e => {
    e.preventDefault();
    const { message, avatar } = this.state;
    const { username, emitNewMessage } = this.props;
    emitNewMessage({ username, message, avatar });
    this.setState({ message: '' });
  }
  
  isSubmitDisabled = () => {
    const { message } = this.state;
    return message.trim() === '';
  }
  
  render() {
    const { avatar, message } = this.state;
    const { username, onUsernameChange } = this.props;
    const isSubmitDisabled = this.isSubmitDisabled();
    return (
      <form
        className="new-message-container"
        onSubmit={this.onSubmit}
      >
        <div className="ui input">
          { avatar && <Avatar name={avatar} /> }
          <input
            type="text"
            className="username"
            placeholder="username"
            value={username}
            onChange={onUsernameChange}
          />
        </div>
        <div className="ui form">
          <textarea
            className="message"
            placeholder="your message goes here..."
            value={message}
            onChange={this.onMessageChange}
          />
        </div>
        <button
          type="submit"
          className={classNames('ui icon button submit-button', { disabled: isSubmitDisabled })}
        >
          <i className="rocket icon"></i>
        </button>
      </form>
    );
  }
}