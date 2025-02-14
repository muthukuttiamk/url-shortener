import React from 'react';
import { Container, Typography } from '@mui/material';
import GoogleLoginButton from './GoogleLoginButton';

const Login = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <GoogleLoginButton />
    </Container>
  );
};

export default Login;
