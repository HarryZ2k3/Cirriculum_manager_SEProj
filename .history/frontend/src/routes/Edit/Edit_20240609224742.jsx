// import Transition from '../../utils/Transition'

// import { Announcement} from './EditComponents'
// const myData = ["Name Nguyen Huynh Thao My", "ITCSIU21204", "31-03-2003", "0911 884 771", "ITCSIU21204@student.hcmiu.edu.vn", "Vietnam"]
// import { Link } from 'react-router-dom'

// function Edit() {
//   return (
//       <Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
//       {/* <Link to="/login">
//         <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
//           Login please
//         </button>
//       </Link> */}
//       {/* Main content 3/4 */}

//       {/* Side bar 1/4 */}
//       <div className="flex w-1/3 flex-grow flex-col justify-between overflow-y-auto px-8 py-4">
//         {/* Profile */}
//         <div className="mt-4 flex flex-col items-center justify-center gap-3">
//             <img
//               className="w-48 rounded-full"
//               src="https://placehold.co/400"
//               alt="Avatar"
//             />
//             {/* <h3 className="text-2xl">Mia James</h3> */}
//             <h3 className="text-2xl">JPG or PNG no larger than 5MB</h3>
//             <div>
               
//             </div>
//         </div>
//       </div>
//       <div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
//             <h1 className="text-left align-middle text-[3rem] text-text_blue tracking-wider">
//                 User information configuration
//                 {/* Name Nguyen Huynh Thao My
//                 ID_card ITCSIU21204
//                 phone +84 911 884 771
//                 gmail: ITCSIU21204@student.hcmiu.edu.vn
//                 religion: Vietnam */}
//             </h1>
//             <div className="flex h-full w-full flex-col gap-2 overflow-y-auto z-10">
//                 {/* Fake data */}
//                 {Array.from({ length: 6 }, (_, i) => (
//                     <Announcement
//                         key={i}
//                         content={myData[i]} 
//                     />
//                 ))}
//             </div>
//             <div className="flex w-1/3 flex-grow flex-col justify-between overflow-hidden px-8 py-4">
//         {/* Link to Profile */}
//             <div className="flex items-center justify-evenly gap-2">
//                     <div className="rounded-lg px-3 text-center">
//                         <Link to="/profile">
//                             <button className="rounded-2xl bg-white text-black p-2 px-3">
//                                 Save
//                             </button>
//                         </Link>
//                     </div>
//                     <div className="rounded-lg px-3 text-center">
//                         <Link to="/profile">
//                             <button className="rounded-2xl bg-white text-black p-2 px-3">
//                                 Cancel
//                             </button>
//                         </Link>
//                     </div>
                    
//             </div>
//       </div>
//     </div>

//     </Transition>
//   )
// }

// export default Edit


import { useState } from 'react';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Box, Avatar } from '@mui/material';
import './Edit.css';

const Edit = () => {
  const [profile, setProfile] = useState({
    StudentName: 'Nguyen Huynh Thao My',
    StudentID: 'ITCSIU21204',
    mobilePhone: '(509)-123-4567',
    email: 'admin@ingeniux.com',
    defaultView: '',
    notifications: 'Jobdone',
    dashboardPreferences: '',
    photo: 'https://via.placeholder.com/150'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile({ ...profile, photo: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile updated:', profile);
  };

  return (
    <Box className="profile-edit-container" component="form" onSubmit={handleSubmit}>
      <h2>Edit your Profile</h2>
      <Box className="profile-photo-section">
        <Avatar src={profile.photo} className="profile-avatar" />
        <Button variant="contained" component="label">
          Change Photo
          <input type="file" hidden onChange={handlePhotoChange} />
        </Button>
      </Box>
      <TextField
        label="Name"
        name="name"
        value={profile.studentName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Title"
        name="title"
        value={profile.studentID}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Mobile Phone"
        name="mobilePhone"
        value={profile.mobilePhone}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={profile.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Default Edit Form View</InputLabel>
        <Select
          name="defaultView"
          value={profile.defaultView}
          onChange={handleInputChange}
        >
          <MenuItem value=""><em>No Default View</em></MenuItem>
          <MenuItem value="View1">View1</MenuItem>
          <MenuItem value="View2">View2</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Notifications</InputLabel>
        <Select
          name="notifications"
          value={profile.notifications}
          onChange={handleInputChange}
        >
          <MenuItem value="Jobdone">Jobdone</MenuItem>
          <MenuItem value="All">All</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Dashboard Preferences"
        name="dashboardPreferences"
        value={profile.dashboardPreferences}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Box className="profile-edit-actions">
        <Button variant="contained" color="primary" type="submit">Save</Button>
        <Button variant="outlined" color="secondary">Cancel</Button>
      </Box>
    </Box>
  );
};

export default Edit;
