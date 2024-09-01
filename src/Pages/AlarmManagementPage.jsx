import React from 'react';
import { Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const alarms = [
  { id: 1, time: '7:00 AM', repeat: 'Daily' },
  { id: 2, time: '8:00 AM', repeat: 'Weekdays' },
];

const AlarmManagementPage = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/add-edit-alarm?id=${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete logic here
    console.log('Delete alarm', id);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Alarm Management
      </Typography>
      <List>
        {alarms.map((alarm) => (
          <ListItem key={alarm.id}>
            <ListItemText
              primary={`Time: ${alarm.time}`}
              secondary={`Repeat: ${alarm.repeat}`}
            />
            <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(alarm.id)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(alarm.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AlarmManagementPage;
