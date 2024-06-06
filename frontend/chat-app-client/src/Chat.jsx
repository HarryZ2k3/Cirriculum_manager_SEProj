import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace with your server address

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });

    return () => socket.disconnect(); // Clean up on unmount
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div className="container">
      <h2>Chat Room</h2>
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;