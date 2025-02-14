import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const URLList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/url');
        setUrls(response.data);
      } catch (error) {
        console.error('Error fetching URLs:', error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL List
      </Typography>
      <List>
        {urls.map((url) => (
          <ListItem key={url._id}>
            <ListItemText primary={url.shortUrl} secondary={url.originalUrl} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default URLList;
