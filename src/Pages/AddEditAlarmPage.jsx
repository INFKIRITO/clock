import React, { useState } from 'react';
import AddEditAlarmScreen from '../components/AddEditAlarmScreen';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const AddEditAlarmPage = () => {
  const { alarmId } = useParams(); // Assuming alarmId is used to edit an existing alarm
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(Boolean(alarmId));

  const handleSave = () => {
    // Save alarm logic here
    console.log('Alarm saved');
    navigate('/'); // Redirect to the home page or any other page
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to the home page or any other page
  };

  return (
    <Container maxWidth="md">
      <Box my={4} textAlign="center">
        <Typography variant="h3" gutterBottom>
          {isEditing ? 'Edit Alarm' : 'Add New Alarm'}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {isEditing ? 'Update the details of your existing alarm.' : 'Set up a new alarm below.'}
        </Typography>
      </Box>

      <Paper elevation={6} style={{ padding: '20px', borderRadius: '8px' }}>
        <AddEditAlarmScreen />
        <Box mt={2} display="flex" justifyContent="center">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
                Save
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" color="secondary" fullWidth onClick={handleCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddEditAlarmPage;
