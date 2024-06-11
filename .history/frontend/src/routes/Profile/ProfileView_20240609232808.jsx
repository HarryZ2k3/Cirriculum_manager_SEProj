import from 'react';
import { Box, Avatar, Button, Typography, Paper, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './ProfileView.css';

const ProfileView = ({ profile, onEdit }) => {
  return (
    <Paper elevation={3} className="profile-view-container">
      <Typography variant="h4" component="h2" gutterBottom>
        Your Profile
      </Typography>
      <Box className="profile-photo-section">
        <Avatar src={profile.photo} className="profile-avatar" />
      </Box>
      <Grid container spacing={2}>
        {Object.keys(profile).map((key) => (
          key !== 'photo' && (
            <Grid item xs={12} md={6} key={key}>
              <Typography variant="h6">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</Typography>
              <Typography variant="body1">{profile[key] || 'N/A'}</Typography>
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
  );
};

export default ProfileView;
