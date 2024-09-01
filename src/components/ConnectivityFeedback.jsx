import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import SyncIcon from '@mui/icons-material/Sync';

const ConnectivityFeedback = () => {
  const [wifiStatus, setWifiStatus] = useState(true);
  const [bluetoothStatus, setBluetoothStatus] = useState(true);
  const [syncStatus, setSyncStatus] = useState(true);

  // Simulate checking for connectivity status
  useEffect(() => {
    // In a real application, this could be API calls or system checks
  }, []);

  return (
    <div className="connectivity-feedback">
      <Typography variant="h6" align="center">
        Connectivity Status
      </Typography>
      <Grid container justifyContent="center" spacing={2} style={{ marginTop: '10px' }}>
        <Grid item>
          <WifiIcon color={wifiStatus ? 'primary' : 'disabled'} />
          <Typography variant="body2" align="center">
            Wi-Fi {wifiStatus ? 'Connected' : 'Disconnected'}
          </Typography>
        </Grid>
        <Grid item>
          <BluetoothIcon color={bluetoothStatus ? 'primary' : 'disabled'} />
          <Typography variant="body2" align="center">
            Bluetooth {bluetoothStatus ? 'Enabled' : 'Disabled'}
          </Typography>
        </Grid>
        <Grid item>
          <SyncIcon color={syncStatus ? 'primary' : 'disabled'} />
          <Typography variant="body2" align="center">
            Sync {syncStatus ? 'Synchronized' : 'Not Synced'}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ConnectivityFeedback;
