import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using the username and password values
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  const handleGoogleSignIn = () => {
    // Logic for signing in with Google
    console.log('Signing in with Google...');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={handleUsernameChange}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleGoogleSignIn}
      >
        Sign in with Google Account
      </Button>
    </Box>
  );
};

export default LoginForm;