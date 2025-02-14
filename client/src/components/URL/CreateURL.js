import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const CreateURL = () => {
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [topic, setTopic] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/url/shorten', {
        longUrl,
        customAlias,
        topic,
      });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error creating URL:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Short URL
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Custom Alias"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
      {shortUrl && (
        <Typography variant="body1" gutterBottom>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </Typography>
      )}
    </Container>
  );
};

export default CreateURL;
