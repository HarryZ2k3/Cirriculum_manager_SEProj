

import { Box, Avatar, Button, Typography, Paper, Grid, Fade } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProfileView = ({ profile, onEdit }) => {
  return (
    <Fade in={true} timeout={500}>
      <Paper elevation={4} className="max-w-4xl mx-auto my-10 p-8 rounded-lg bg-white shadow-lg transition-all duration-300">
        <Typography variant="h4" component="h2" gutterBottom className="text-center mb-6">
          Your Profile
        </Typography>
        <Box className="flex justify-center mb-5">
          <Avatar src={profile.photo} className="w-36 h-36 shadow-md" />
        </Box>
        <Grid container spacing={3}>
          {Object.keys(profile).map((key) => (
            key !== 'photo' && (
              <Grid item xs={12} sm={6} key={key}>
                <Typography variant="h6" className="text-gray-800">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                </Typography>
                <Typography variant="body1" className="mt-2 text-gray-600">
                  {profile[key] || 'N/A'}
                </Typography>
              </Grid>
            )
          ))}
        </Grid>
        <Box className="flex justify-center mt-8">
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
