import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          URL Shortener
        </Typography>
        <Button color="inherit" component={Link} to="/create">Create URL</Button>
        <Button color="inherit" component={Link} to="/urls">URL List</Button>
        <Button color="inherit" component={Link} to="/analytics/overall">Analytics</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
