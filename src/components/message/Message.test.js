
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Message from './message';

const username = 'username';
const message = 'message';
const avatar = 'avatar';

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<Message
        username={username}
        message={message}
        avatar={avatar}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});