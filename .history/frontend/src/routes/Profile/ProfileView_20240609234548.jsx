import React from 'react';
import { Box, Avatar, Button, Typography, Paper, Grid, Fade } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './ProfileView.css';

const ProfileView = ({ profile, onEdit }) => {
  return (
    <Fade in={true} timeout={500}>
      <Paper elevation={4} className="profile-view-container">
        <Typography variant="h4" component="h2" gutterBottom>
          Your Profile
        </Typography>
        <Box className="profile-photo-section">
          <Avatar src={profile.photo} className="profile-avatar" />
        </Box>
        <Grid container spacing={3}>
          {Object.keys(profile).map((key) => (
            key !== 'photo' && (
              <Grid item xs={12} sm={6} key={key}>
                <Typography variant="h6" className="profile-field-title">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                </Typography>
                <Typography variant="body1" className="profile-info">
                  {profile[key] || 'N/A'}
                </Typography>
              </Grid>
            )
          ))}
        </Grid>
        <Box className="profile-view-actions">
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={onEdit}
          >
            Edit Profile
          </Button>
        </Box>
      </Paper>
    </Fade>
  );
};

export default ProfileView;
