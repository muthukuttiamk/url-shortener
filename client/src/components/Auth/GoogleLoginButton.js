import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/api/auth/google';
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogin}>
      Login with Google
    </Button>
  );
};

export default GoogleLoginButton;
