import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotificationSystem from '../components/NotificationSystem';
import ConnectivityFeedback from '../components/ConnectivityFeedback';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddAlarm = () => navigate('/alarm/add');
  const handleManageAlarms = () => navigate('/alarm/management');
  const handleSettings = () => navigate('/settings');
  const handleAlarmRinging = () => navigate('/alarm/ringing');

  // Get current time and date
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();

  return (
    <Container maxWidth="lg">
      <Box my={4} textAlign="center">
        <Typography variant="h2" gutterBottom color="primary">
          {currentTime}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {currentDate}
        </Typography>
        <Typography variant="h6" color="textSecondary" mt={2}>
          Next Alarm: 7:00 AM
        </Typography>
      </Box>

      <Box my={4} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleAddAlarm} style={{ marginRight: '8px' }}>
          Add New Alarm
        </Button>
        <Button variant="contained" color="secondary" onClick={handleManageAlarms} style={{ marginRight: '8px' }}>
          Manage Alarms
        </Button>
        <Button variant="contained" color="success" onClick={handleSettings} style={{ marginRight: '8px' }}>
          Settings
        </Button>
        <Button variant="contained" color="warning" onClick={handleAlarmRinging}>
          Alarm Ringing
        </Button>
      </Box>

      <Box my={4}>
        <Grid container spacing={4}>

          <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={6} style={{ padding: '20px', borderRadius: '8px' }}>
              <NotificationSystem />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={6} style={{ padding: '20px', borderRadius: '8px' }}>
              <ConnectivityFeedback />
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
