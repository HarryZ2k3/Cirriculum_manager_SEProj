import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Box, Avatar, Paper, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import './ProfileEdit.css';

const ProfileEdit = ({ profile, onSave, onCancel }) => {
  const [editProfile, setEditProfile] = useState(profile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfile({ ...editProfile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setEditProfile({ ...editProfile, photo: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editProfile);
  };

  return (
    <Paper elevation={3} className="profile-edit-container" component="form" onSubmit={handleSubmit}>
      <h2>Edit your Profile</h2>
      <Box className="profile-photo-section">
        <Avatar src={editProfile.photo} className="profile-avatar" />
        <Button variant="contained" component="label">
          Change Photo
          <input type="file" hidden onChange={handlePhotoChange} />
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Name"
            name="name"
            value={editProfile.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Title"
            name="title"
            value={editProfile.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Organization"
            name="organization"
            value={editProfile.organization}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Work Phone"
            name="workPhone"
            value={editProfile.workPhone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Mobile Phone"
            name="mobilePhone"
            value={editProfile.mobilePhone}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email"
            name="email"
            value={editProfile.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Default Edit Form View</InputLabel>
            <Select
              name="defaultView"
              value={editProfile.defaultView}
              onChange={handleInputChange}
            >
              <MenuItem value=""><em>No Default View</em></MenuItem>
              <MenuItem value="View1">View1</MenuItem>
              <MenuItem value="View2">View2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Notifications</InputLabel>
            <Select
              name="notifications"
              value={editProfile.notifications}
              onChange={handleInputChange}
            >
              <MenuItem value="Jobdone">Jobdone</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Dashboard Preferences"
            name="dashboardPreferences"
            value={editProfile.dashboardPreferences}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
      <Box className="profile-edit-actions">
        <Button variant="contained" color="primary" startIcon={<SaveIcon />} type="submit">Save</Button>
        <Button variant="outlined" color="secondary" startIcon={<CancelIcon />} onClick={onCancel}>Cancel</Button>
      </Box>
    </Paper>
  );
};

export default ProfileEdit;
