import React from 'react';
import { Slider, List, ListItem, ListItemText } from '@mui/material';

const SettingsScreen = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Volume" />
        <Slider defaultValue={50} aria-label="Volume" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Sound Library Management" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Connectivity Settings" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Time Zone Settings" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Sync Settings" />
      </ListItem>
    </List>
  );
};

export default SettingsScreen;
