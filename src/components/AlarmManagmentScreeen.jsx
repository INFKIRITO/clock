import React from 'react';
import { List, ListItem, ListItemText, Switch, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const alarms = [
  { time: '7:00 AM', repeat: 'Daily', enabled: true },
  { time: '8:00 AM', repeat: 'Weekdays', enabled: false },
];

const AlarmManagementScreen = () => {
  return (
    <List>
      {alarms.map((alarm, index) => (
        <ListItem key={index}>
          <ListItemText primary={alarm.time} secondary={`Repeat: ${alarm.repeat}`} />
          <Switch checked={alarm.enabled} />
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default AlarmManagementScreen;
