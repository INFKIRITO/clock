import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const notifications = [
  { type: 'Upcoming Alarm', message: 'Alarm set for 7:00 AM' },
  { type: 'Missed Alarm', message: 'You missed the 8:00 AM alarm' },
  { type: 'Low Battery', message: 'Battery is low, please charge your device' },
];

const NotificationSystem = () => {
  return (
    <div className="notification-system">
      <List>
        {notifications.map((notification, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={notification.type}
              secondary={notification.message}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NotificationSystem;
