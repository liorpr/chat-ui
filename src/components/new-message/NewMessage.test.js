
import React from 'react';
import TestRenderer from 'react-test-renderer';
import NewMessage from './NewMessage';

const mockFn = jest.fn();
const noop = () => {};
const eventMock = { preventDefault: noop };

const username = "John";
const onUsernameChange = noop;
const emitNewMessage = mockFn;

let renderer;

describe('NewMessage tests', () => {
  beforeEach(() => {
    renderer = TestRenderer.create(<NewMessage
        username={username}
        onUsernameChange={onUsernameChange}
        emitNewMessage={emitNewMessage}
      />);
  });
  
  it('disables submit on initial empty message', () => {
    const testInstance = renderer.root.instance;
    expect(testInstance.isSubmitDisabled()).toBe(true);
  });
  
  it('calls emitNewMessage on submit', () => {
    const testInstance = renderer.root.instance;
    testInstance.onSubmit(eventMock);
    expect(mockFn).toHaveBeenCalled();
  })
});