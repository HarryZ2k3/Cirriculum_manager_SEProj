import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Avatar, Box, TextField, Button, Typography, Paper, Grid, List, ListItem, ListItemAvatar, ListItemText, Divider, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import './ChatPage.css';

const socket = io('http://localhost:3001'); // Ensure this matches your backend URL

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [currentChat, setCurrentChat] = useState('Huỳnh Phương Đại - ITITWE21039'); // Default chat
  const [contacts, setContacts] = useState([
    { name: 'Huỳnh Phương Đại', time: '19:45', message: 'Oke, see ya for the next time', initials: 'HPD' },
    { name: 'Le Thu Hoang', time: '19:25', message: 'Cool, NewJeans just came back!', initials: 'LTH' }
  ]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const message = { user: 'You', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      socket.emit('chat message', message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setInput('');
    }
  };

  return (
    
    <Box className="chat-page-container">
      <Grid container component={Paper} className="chat-box">
        <Grid item xs={3} className="sidebar">
          <Box className="search-bar">
            <TextField
              placeholder="Search Messenger"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <List>
            {contacts.map((contact, index) => (
              <React.Fragment key={index}>
                <ListItem button onClick={() => setCurrentChat(contact.name)}>
                  <ListItemAvatar>
                    <Avatar>{contact.initials}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={contact.name} secondary={contact.message} />
                  <Typography variant="body2" color="textSecondary">
                    {contact.time}
                  </Typography>
                </ListItem>
                {index < contacts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Grid>
        <Grid item xs={9} className="chat-window">
          <Box className="chat-header">
            <Avatar src="https://via.placeholder.com/50" />
            <Typography variant="h6" className="chat-title">{currentChat}</Typography>
          </Box>
          <Box className="messages">
            {messages.map((msg, index) => (
              <Box key={index} className={`message ${msg.user === 'You' ? 'sent' : 'received'}`}>
                <Typography variant="body2" className="message-time">{msg.time}</Typography>
                <Typography variant="body1" className="message-text">{msg.text}</Typography>
              </Box>
            ))}
          </Box>
          <form onSubmit={handleSubmit} className="message-form">
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a message..."
              variant="outlined"
              fullWidth
              className="message-input"
            />
            <IconButton type="submit" color="primary" className="send-button">
              <SendIcon />
            </IconButton>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatPage;
