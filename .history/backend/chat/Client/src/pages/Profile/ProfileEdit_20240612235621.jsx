// import { useState } from 'react';
// import {
//   Button,
//   TextField,
//   MenuItem,
//   Box,
//   Avatar,
//   Paper,
//   Grid,
//   Fade,
//   Typography
// } from '@mui/material';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Cancel';
// import './ProfileEdit.css';

// const ProfileEdit = ({ profile, onSave, onCancel }) => {
//   const [editProfile, setEditProfile] = useState(profile);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditProfile({ ...editProfile, [name]: value });
//   };

//   const handlePhotoChange = (e) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         setEditProfile({ ...editProfile, photo: reader.result });
//       }
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(editProfile);
//   };

//   return (
//     <Fade in={true} timeout={500}>
//       <Paper elevation={4} className="profile-edit-container" component="form" onSubmit={handleSubmit}>
//         <Typography variant="h4" component="h2" gutterBottom>
//           Edit your Profile
//         </Typography>
//         <Box className="profile-photo-section">
//           <Avatar src={editProfile.photo} className="profile-avatar" />
//           <Button variant="contained" component="label" className="change-photo-button">
//             Change Photo
//             <input type="file" hidden onChange={handlePhotoChange} />
//           </Button>
//         </Box>
//         <Grid container spacing={3}>
//           {Object.keys(editProfile).map((key) => (
//             key !== 'photo' && (
//               <Grid item xs={12} sm={6} key={key}>
//                 <TextField
//                   label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
//                   name={key}
//                   value={editProfile[key]}
//                   onChange={handleInputChange}
//                   fullWidth
//                   margin="normal"
//                   select={key === 'defaultView' || key === 'notifications'}
//                 >
//                   {(key === 'defaultView' || key === 'notifications') && (
//                     <>
//                       {key === 'defaultView' && <MenuItem value=""><em>No Default View</em></MenuItem>}
//                       {key === 'notifications' && <MenuItem value="Jobdone">Jobdone</MenuItem>}
//                       {key === 'notifications' && <MenuItem value="All">All</MenuItem>}
//                     </>
//                   )}
//                 </TextField>
//               </Grid>
//             )
//           ))}
//         </Grid>
//         <Box className="profile-edit-actions">
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<SaveIcon />}
//             type="submit"
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             startIcon={<CancelIcon />}
//             onClick={onCancel}
//           >
//             Cancel
//           </Button>
//         </Box>
//       </Paper>
//     </Fade>
//   );
// };

// export default ProfileEdit;

import { useState } from 'react';
import 'tailwindcss/tailwind.css';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Image:', image);
    console.log('Info:', info);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-5">
      <div className="max-w-4xl w-full p-8 rounded-lg shadow-lg transition-all duration-300 bg-white">
        <h1 className="text-2xl font-bold mb-4">Upload Image and Update Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {image && (
              <div className="mt-4">
                <img src={image} alt="Uploaded" className="w-full max-w-xs" />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="info">
              Information
            </label>
            <input
              type="text"
              id="info"
              value={info}
              onChange={handleInfoChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageUploader;
