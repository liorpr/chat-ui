
import React from 'react';
import { Container } from 'semantic-ui-react';
import SocketService from '../../services/socket';
import StorageService from '../../services/storage';
import Header from '../header/Header';
import MessageList from '../message-list/MessageList';
import NewMessage from '../new-message/NewMessage';

class App extends React.PureComponent {
  
  state = { username: '' };
  
  socketService = new SocketService();

  componentDidMount() {
    let username = this.getStoredUsername();
    if (username) {
      this.setState({ username })
    }
  }
  
  saveUsername(username) {
    StorageService.saveUsername(username);
  }
  
  getStoredUsername = () => {
    const { username } = StorageService.getItems();
    return username;
  }
  
  onUsernameChange = e => {
    const username = e.target.value;
    this.saveUsername(username);
    this.setState({ username });
  }
  
  render() {
    const { username } = this.state;
    const { emitNewMessage, subscribeToNewMessage } = this.socketService;
    return (
      <Container className="app-container">
      
      <Header />
      <MessageList
        subscribeToNewMessage={subscribeToNewMessage}
        currentUsername={username}
      />
      <NewMessage
        username={username}
        onUsernameChange={this.onUsernameChange}
        emitNewMessage={emitNewMessage}
      />
      
      </Container>
    );
  }
}

export default App;