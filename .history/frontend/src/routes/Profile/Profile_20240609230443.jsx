// import Transition from '../../utils/Transition'
// import React,{useState, useRef} from 'react' 
// import { Announcement} from './ProfileComponents'
// import { FaRegEdit } from 'react-icons/fa'
// import { Link } from 'react-router-dom';
// // import { Button } from "primereact/button";
// // import { Dialog } from "primereact/inputtext";
// // import {InputText} from "primereact/inputtext";
// // // import img from "../../assets/image.png";
// // import Avatar from "react-avatar-edit";

// const myData = ["Name Nguyen Huynh Thao My", "ITCSIU21204", "31-03-2003", "0911 884 771", "ITCSIU21204@student.hcmiu.edu.vn", "Vietnam"];

// function Profile() {
//   const [image,setimage] = useState("");
//   const [imagecrop,setimagecrop] = useState(false);
//   const [src, setsrc] = useState(false);
//   const [profile, setprofile] = useState([]);
//   const profileFinal = profile.map((item) => item.pview);

//   const onClose = () => {
//     setpview(null);
//   };

//   const onCrop = (view) => {
//     setpview(view);
//   };
  
//   const saveCropImage = () => {
//     setprofile([...profile, {pview}]);
//     setimagecrop(false);
//   };
//   // const [displayBasic, setDisplayBasic] = useState(false);
//   return (
//       <Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
//       {/* <Link to="/login">
//         <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
//           Login please
//         </button>
//       </Link> */}
//       {/* Main content 3/4 */}

//       {/* Side bar 1/4 */}
//       <div className="flex w-1/3 flex-grow flex-col justify-between overflow-hidden px-8 py-4">
//         {/* Profile */}
//         <div className="mt-4 flex flex-col items-center justify-center gap-2">
//             <img
//               style = {{
//                 width: "200px",
//                 height: "200px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//                 border: "4px solid green",
//               }}
//               onClick = {() => setimagecrop(true)}
//               className="w-48 rounded-full"
//               src="https://placehold.co/400"
//               alt="Avatar"
//             />
//             <label htmlFor = "" className="mt-3 font-semibold text-5xl">Mia Mia</label>
//             <Dialog
//               visible = {imagecrop}
//               header = {() => (
//                 <p htmlFor="" className="text-2xl font-semibold textcolor">
//                   Update Profile
//                 </p>
//               )}
//               onHide = {() => setimagecrop(false)}
//             >
//               <div className="confirmation-content flex flex column align-items-center">
//                 <Avatar
//                   width = {500}
//                   height = {400}
//                   onCrop = {onCrop}
//                   onClose = {onClose}
//                   shadingColor = {"#474649"}
//                   backgroundColor = {"#474649"}
//                 />
//               </div>
//             <div className= "flex flex-column align-items-center mt-5 w-12">
//               <div className = "flex justify-content-around w-12 mt-4">
//                 <Button 
//                   onClick = {saveCropImage}
//                   label = "Save"
//                   icon = "pi pi-check"
//                 />
//               </div>
//             </div>
//             </Dialog>
//             <InputText
//               type = "file"
//               accept = "/image/*"
//               onChange = {(event) => {
//                 const file = event.target.files[0];
//                 if (file && file.type.substring(0, 5) === "image") {
//                   setimage(file);
//                 }
//                 else {
//                   setimage(null);
//                 }
//               }}
//             />
//             <h3 className="text-2xl">Mia James</h3>
//             <Link to="/edit">
//               <button className="flex items-center justify-center gap-2 rounded-full bg-card_home px-4 py-1 text-black">
//                 <FaRegEdit />
//                 Edit Profile
//               </button>
//             </Link>
//         </div>
//       </div>
//       <div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-2">
// 				<h1 className="text-left align-middle text-[3rem] text-text_blue tracking-wider">
// 					User information
// 				</h1>
// 				<div className="flex h-full w-full flex-col gap-4 overflow-y-auto z-10">
// 					{/* Fake data */}
// 					{Array.from({ length: 6 }, (_, i) => (
// 						<Announcement
// 							key={i}
// 							content={myData[i]} 
// 						/>
// 					))}
// 				</div>
// 			</div>
//     </Transition>
//   )
// }

// export default Profile


import { useState } from 'react';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Box, Avatar } from '@mui/material';
import './Edit.css';
import Transition from '../../utils/Transition'

const Edit = () => {
  const [profile, setProfile] = useState({
    studentName: 'Nguyen Huynh Thao My',
    studentID: 'ITCSIU21204',
    mobilePhone: '(509)-123-4567',
    email: 'mia@thdzyz.com',
    defaultView: '',
    dashboardPreferences: '',
    photo: 'https://placehold.co/400'
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
    <Transition className="flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%">
        <div className="flex w-1/3 flex-grow flex-col justify-between overflow-y-auto px-8 py-4">
            {/* Profile */}
            <div className="mt-4 flex flex-col items-center justify-center gap-3">
                <Box className="mt-4 flex flex-col items-center justify-center gap-3 profile-photo-section">
                    <Avatar src={profile.photo} className="h-40 w-40 rounded-full profile-avatar" />
                    <Button variant="contained" component="label">
                    Change Photo
                    <input type="file" hidden onChange={handlePhotoChange} />
                    </Button>
                </Box>
                <h3 className="text-1.75xl">JPG or PNG no larger than 5MB</h3>

            </div>
        </div>
        <div className="flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-4">
            <Box className="profile-edit-container" component="form" onSubmit={handleSubmit}>
                <h2>Edit your Profile</h2>
                <TextField
                    label="StudentName"
                    name="studentName"
                    value={profile.studentName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="StudentID"
                    name="studentID"
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
        </div>
    
    
    </Transition>

  );
};

export default Edit;