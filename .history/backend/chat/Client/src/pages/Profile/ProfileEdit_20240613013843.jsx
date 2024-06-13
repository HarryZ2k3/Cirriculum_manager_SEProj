

import { useState } from 'react';
import { Box, Avatar, Button, TextField, Paper, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const ProfileEdit = ({ profile, onSave, onCancel }) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedProfile);
  };

  return (
    <Paper elevation={4} className="max-w-4xl mx-auto my-10 p-8 rounded-lg bg-white shadow-lg transition-all duration-300">
      <Box className="flex justify-center mb-5">
        <Avatar src={updatedProfile.photo} className="w-36 h-36 shadow-md" />
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {Object.keys(updatedProfile).map((key) => (
            key !== 'photo' && (
              <Grid item xs={12} sm={6} key={key}>
                <TextField
                  label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  name={key}
                  value={updatedProfile[key]}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            )
          ))}
        </Grid>
        <Box className="flex justify-center mt-8">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            className="mr-2"
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<CancelIcon />}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default ProfileEdit;
