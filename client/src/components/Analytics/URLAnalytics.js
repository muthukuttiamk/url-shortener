import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const URLAnalytics = () => {
  const { alias } = useParams();
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/analytics/${alias}`);
        setAnalytics(response.data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };

    fetchAnalytics();
  }, [alias]);

  if (!analytics) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Analytics
      </Typography>
      <Typography variant="body1">Total Clicks: {analytics.totalClicks}</Typography>
      {/* Add more analytics data as needed */}
    </Container>
  );
};

export default URLAnalytics;
