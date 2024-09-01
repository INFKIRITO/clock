import React, { useState, useEffect } from 'react';
import { TextField, FormControl, FormControlLabel, Checkbox, Button, Grid, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

const AddEditAlarmScreen = () => {
  const [time, setTime] = useState(null);
  const [repeat, setRepeat] = useState([]);
  const [label, setLabel] = useState('');
  const [sound, setSound] = useState('');

  const handleTimeChange = (newTime) => setTime(newTime);
  const handleRepeatChange = (event) => setRepeat(event.target.value);
  const handleLabelChange = (event) => setLabel(event.target.value);
  const handleSoundChange = (event) => setSound(event.target.value);

  const handleSubmit = () => {
    // Handle form submission
    console.log({ time, repeat, label, sound });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Alarm Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TimePicker
              label="Alarm Time"
              value={time}
              onChange={handleTimeChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Repeat</InputLabel>
              <Select
                multiple
                value={repeat}
                onChange={handleRepeatChange}
                renderValue={(selected) => selected.join(', ')}
              >
                <MenuItem value="Daily">Daily</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Alarm Label"
              value={label}
              onChange={handleLabelChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Alarm Sound"
              value={sound}
              onChange={handleSoundChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default AddEditAlarmScreen;
