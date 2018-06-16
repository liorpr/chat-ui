
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../message/Message';

export default class MessageList extends Component {
  
  static propTypes = {
    subscribeToNewMessage: PropTypes.func,
    currentUsername: PropTypes.string
  };
  
  state = { allMessages: [] };
  
  componentDidMount() {
    const { subscribeToNewMessage } = this.props;
    subscribeToNewMessage(this.onNewMessage);
  }
  
  onNewMessage = message => {
    this.setState({ allMessages: [...this.state.allMessages, message] });
  }
  
  renderMessage = (message, i) => {
    const { currentUsername } = this.props;
    return (
      <Message
        key={i}
        {...message}
        isSelfMessage={message.username === currentUsername}
      />
    );
  }
  
  render() {
    const { allMessages } = this.state;
    return (
      <div className="message-list-container">
        <ul>
          { allMessages.map(this.renderMessage) }
        </ul>
      </div>
    );
  }
}