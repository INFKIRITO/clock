import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const AlarmRingingPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSnooze = () => {
        // Implement snooze functionality here
        console.log('Snooze button clicked');
      };
    
      const handleStop = () => {
        // Implement stop functionality here
        console.log('Stop button clicked');
        navigate('/'); // Navigate back to the home page
      };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h2">
        {new Date().toLocaleTimeString()}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Alarm: Morning Alarm
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px', marginRight: '10px' }}>
        Snooze
      </Button>
      <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
        Stop
      </Button>
    </div>
  );
};

export default AlarmRingingPage;
