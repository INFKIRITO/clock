import React from 'react';
import { Button, Typography } from '@mui/material';

const AlarmRingingScreen = () => {
  return (
    <div className="alarm-ringing-screen">
      <Typography variant="h2" align="center">
        7:00 AM
      </Typography>
      <Typography variant="h6" align="center">
        Wake Up!
      </Typography>
      <Button variant="contained" color="primary">
        Snooze
      </Button>
      <Button variant="contained" color="secondary">
        Stop
      </Button>
    </div>
  );
};

export default AlarmRingingScreen;
