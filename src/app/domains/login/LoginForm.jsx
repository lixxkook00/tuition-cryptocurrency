import React, { useEffect, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';

import { handleLoginWithGoogle } from './action';;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  // LOGIN WITH GOOGLE
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(
    () => {
      handleLoginWithGoogle(user, setProfile)
    },
    [ user ]
  );

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

      {profile ? (
          <div>
              <img src={profile.picture} alt="user image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
          </div>
      ) : (
        <Button variant="contained" color="primary" onClick={login}>
          Login with Google
        </Button>
      )}

      
    </Box>
  );
};

export default LoginForm;