import React, { useState } from 'react';
import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Avatar,
  Paper,
  Grid,
} from '@mui/material';
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
    <Paper elevation={4} className="profile-edit-container" component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" component="h2" gutterBottom>
        Edit your Profile
      </Typography>
      <Box className="profile-photo-section">
        <Avatar src={editProfile.photo} className="profile-avatar" />
        <Button variant="contained" component="label" className="change-photo-button">
          Change Photo
          <input type="file" hidden onChange={handlePhotoChange} />
        </Button>
      </Box>
      <Grid container spacing={3}>
        {Object.keys(editProfile).map((key) => (
          key !== 'photo' && (
            <Grid item xs={12} sm={6} key={key}>
              <TextField
                label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                name={key}
                value={editProfile[key]}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                select={key === 'defaultView' || key === 'notifications'}
              >
                {(key === 'defaultView' || key === 'notifications') && (
                  <>
                    {key === 'defaultView' && <MenuItem value=""><em>No Default View</em></MenuItem>}
                    {key === 'notifications' && <MenuItem value="Jobdone">Jobdone</MenuItem>}
                    {key === 'notifications' && <MenuItem value="All">All</MenuItem>}
                  </>
                )}
              </TextField>
            </Grid>
          )
        ))}
      </Grid>
      <Box className="profile-edit-actions">
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          type="submit"
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<CancelIcon />}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Box>
    </Paper>
  );
};

export default ProfileEdit;
