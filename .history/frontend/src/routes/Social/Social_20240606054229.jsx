// // import Transition from '../../utils/Transition'
// // import { Link, useNavigate } from 'react-router-dom'
// // import { FiEye, FiEyeOff } from 'react-icons/fi';
// // import axios from 'axios';
// // import { useState } from 'react';
// // import bg_img from '../LoginSign/assets/register.png'

// // const Register = () => {
// // 	const [showPassword, setShowPassword] = useState(false);
// // 	const [First_name, setFirst_name] = useState('');
// // 	const [Last_name, setLast_name] = useState('');
// // 	const [Email, setEmail] = useState('');
// // 	const [Password, setPassword] = useState('');
// // 	const [confirmPassword, setConfirmPassword] = useState('');
// // 	const [Phone_number, setPhone_number] = useState('');
// // 	const [User_type] = useState('USER'); // Default user type
// // 	const navigate = useNavigate();

// // 	const handleRegister = async (e) => {
// // 		e.preventDefult();
// // 		if (Password !== confirmPassword) {
// // 			console.error("Passwords do not matching")
// // 			return
// // 		}

// // 		try {
// // 			const response = await axios.post("https://authentication-pf3yfmx32q-uc.a.run.app/user/signup",
// // 			{
// // 				First_name: First_name,
// // 				Last_name: Last_name,
// // 				Password: Password,
// // 				Email: Email,
// // 				Phone_number: Phone_number,
// // 				User_type: User_type,
// // 			},
// // 			{
// // 				headers: {
// // 					"Content-Type": "application/json",
// // 				},
// // 			}
// // 			)
// // 			if (response.status === 200) 
// // 				navigate('/login')
// // 			else
// // 				console.error("Failed for register!")
// // 			}
// // 			catch (error) {
// // 				console.error("Error:", error);
// // 		}
// // 	}
// // 	return (
// // 		<Transition className='flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%'>
// // 			{/*Left-Image*/}
// // 			<div className='flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-2 rounded-lg'>
// // 				<div className='text-center font-bold flex text-4xl justify-center items-center flex flex-col py-4'>
// // 					<p className='p-1 mb-2'>Student Records Management</p>
// // 					<p className='p-1 smaller-text'> Group 1</p>                    
// // 				</div>
// // 				<img src={bg_img} alt="" />
// // 			</div>
// // 			{/*Right-Information*/}
// // 			<div className="flex w-3/4 flex-grow flex-col justify-between overflow-y-auto px-8 py-5 rounded-lg items-center">
// // 				<form className='w-3/4' onSubmit={handleRegister}>
// //           			<p className='text-4xl mb-5 font-semibold text-center'>Register</p>
// // 					<div className='flex gap-4 py-2'>
// // 						<div className='flex-1'>
// // 							<label>First Name</label>
// // 							<input
// // 								type="text"
// // 								className='block w-full p-2 border border-gray-300 rounded'
// // 								placeholder='First name'
// // 								value={First_name}
// // 								onChange={(e) => setFirst_name(e.target.value)}
// // 							/>
// // 						</div>

// // 						<div className='flex-1'>
// // 							<label>Last Name</label>
// // 							<input
// // 								type="text"
// // 								className='block w-full p-2 border border-gray-300 rounded'
// // 								placeholder='Last name'
// // 								value={Last_name}
// // 								onChange={(e) => setLast_name(e.target.value)}
// // 							/>
// // 						</div>
// // 					</div>

// // 					<div className='py-3'>
// // 						<label>Email</label>
// // 						<input
// // 							type="email"
// // 							className='block w-full p-2 border border-gray-300 rounded'
// // 							placeholder='Email confirmation'
// // 							value={Email}
// // 							onChange={(e) => setEmail(e.target.value)}
// // 						/>
// // 					</div>
// // 					<div className='py-3'>
// // 						<label>Phone Number</label>
// // 						<input
// // 							type="text"
// // 							className='block w-full p-2 border border-gray-300 rounded'
// // 							placeholder='Phone number'
// // 							value={Phone_number}
// // 							onChange={(e) => setPhone_number(e.target.value)}
// // 						/>
// // 					</div>

// // 					<div className='py-3'>
// // 						<label>Password</label>
// // 						<div className="relative">
// // 							<input
// // 								type={showPassword ? "text" : "password"}
// // 								className="block w-full p-2 border border-gray-300 rounded"
// // 								placeholder='Password'
// // 								value={Password}
// // 								onChange={(e) => setPassword(e.target.value)}
// // 							/>
// // 							<div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
// // 								{showPassword ? (<FiEyeOff onClick={() => setShowPassword(false)} />) : (<FiEye onClick={() => setShowPassword(true)} />)}
// // 							</div>
// // 						</div>
// // 					</div>

// // 					<div className='py-3'>
// // 						<label>Confirm Password</label>
// // 						<div className="relative">
// // 							<input
// // 								type={showPassword ? "text" : "password"}
// // 								className="block w-full p-2 border border-gray-300 rounded"
// // 								placeholder='Confirm password'
// // 								value={confirmPassword}
// // 								onChange={(e) => setConfirmPassword(e.target.value)}
// // 							/>
// // 							<div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
// // 								{showPassword ? (<FiEyeOff onClick={() => setShowPassword(false)} />) : (<FiEye onClick={() => setShowPassword(true)} />)}
// // 							</div>
// // 						</div>
// // 					</div>
// //           			<button type="submit" className='bg-blue p-3 rounded-lg text-white font-semibold w-full'>Sign up</button>
// //         		</form>
// //         		<div className='text-center flex mt-3'>
// //           			Already have an account?
// //           			<p className='text-sky-500 ml-1'><Link to="/login">Log in</Link></p>
// //         		</div>
// // 			</div>

// // 		</Transition>
	
// // 	)
// // }
// // export default Register;

// import { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3002'); // Replace with your server address

// function Social() {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     socket.on('chat message', (msg) => {
//       setMessages([...messages, msg]);
//     });

//     return () => socket.disconnect(); // Clean up on unmount
//   }, [messages]);

//   const sendMessage = (event) => {
//     event.preventDefault();
//     socket.emit('chat message', message);
//     setMessage('');
//   };

//   return (
//     <div className="container">
//       <h2>Chat Room</h2>
//       <div className="chat-history">
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <p>{msg}</p>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={sendMessage}>
//         <input
//           type="text"
//           value={message}
//           onChange={(event) => setMessage(event.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }
// export default Social;


import { PrettyChatWindow } from "react-chat-engine-pretty";

const Social = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default Social;

import { useState } from "react";

import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default Ch;