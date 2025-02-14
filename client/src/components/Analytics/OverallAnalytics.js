import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const OverallAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/analytics/overall');
        setAnalytics(response.data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };

    fetchAnalytics();
  }, []);

  if (!analytics) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Overall Analytics
      </Typography>
      <Typography variant="body1">Total URLs: {analytics.totalUrls}</Typography>
      <Typography variant="body1">Total Clicks: {analytics.totalClicks}</Typography>
      {/* Add more analytics data as needed */}
    </Container>
  );
};

export default OverallAnalytics;
