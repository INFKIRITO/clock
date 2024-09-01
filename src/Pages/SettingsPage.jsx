import React from 'react';
import { Typography, Slider, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';

const SettingsPage = () => {
  const handleVolumeChange = (event, newValue) => {
    console.log('Volume:', newValue);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography variant="h6" gutterBottom>
        Volume
      </Typography>
      <Slider
        defaultValue={50}
        aria-labelledby="volume-slider"
        valueLabelDisplay="auto"
        onChange={handleVolumeChange}
      />
      <FormControl fullWidth style={{ marginTop: '20px' }}>
        <InputLabel>Sound Library</InputLabel>
        <Select defaultValue="Default">
          <MenuItem value="Default">Default</MenuItem>
          <MenuItem value="Custom">Custom</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Time Zone"
        fullWidth
        style={{ marginTop: '20px' }}
      />
      <TextField
        label="Sync Settings"
        fullWidth
        style={{ marginTop: '20px' }}
      />
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Save
      </Button>
    </div>
  );
};

export default SettingsPage;
