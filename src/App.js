import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AlarmManagementPage from './Pages/AlarmManagementPage';
import AddEditAlarmPage from './Pages/AddEditAlarmPage';
import SettingsPage from './Pages/SettingsPage';
import AlarmRingingPage from './Pages/AlarmRingingPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/alarm" element={<AddEditAlarmPage />} />
      <Route path="/alarm/add" element={<AddEditAlarmPage />} />
      <Route path="/alarm/edit/:alarmId" element={<AddEditAlarmPage />} />
      <Route path="/alarm/management" element={<AlarmManagementPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/alarm/ringing" element={<AlarmRingingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
