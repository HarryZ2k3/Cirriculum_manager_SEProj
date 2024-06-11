import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Avatar, Box, TextField, Button, Typography, Paper, Grid, List, ListItem, ListItemAvatar, ListItemText, Divider, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import './ChatPage.css';
import Transition from '../../utils/Transition';
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
    <Transition >

    </Transition>
  );
};

export default ChatPage;
