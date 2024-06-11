import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className='loginPage flex'>
        <div className='contanier flex'>
            <div className='videoDiv'>
                <img src = {bg_img}></img>
            </div>
        </div>
    </div>
  )
}




//current
// import  { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import bg_img from '../LoginSign/assets/register.png'
// function Login() {
//   const [username, setUsername] = useState('');
//   const [showPassword, setShowPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('https://665071efec9b4a4a6032194b.mockapi.io/login', { username, password });
//       const token = response.data.token; // Replace with your token structure
//       localStorage.setItem('token', token); // Store token in local storage

//       // Redirect to a protected route after successful login
//       navigate('/home');
//     } catch (error) {
//       setError(error.response?.data?.message || 'Login failed');
//     }
//   };
//   return (
//     <div className='flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%'>
// 			{/*Left-Image*/}
// 			<div className='flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-2 rounded-lg'>
// 				<div className='text-center font-bold flex text-4xl justify-center items-center flex-col py-4'>
// 					<p className='p-1 mb-2'>Student Records Management</p>
// 					<p className='p-1 smaller-text'> Group 1</p>                    
// 				</div>
// 				<img src={bg_img} alt="" />
// 			</div>
// 			{/*Right-Information*/}
//       <div className="flex flex-col w-1/2 items-center justify-center font-bold">
//           <form className="w-1/2 gap-6" onSubmit={handleLogin}>
//           <p className="text-3xl mb-5">Log in</p>
//           <label className="font-medium ">Username</label>
//           <div className="relative">
//             <input
//               type="text"
//               className = "block w-full p-2 border font-thin border-gray-300 rounded text-white"
//               id="username"
//               value={username}
//               onChange={(event) => setUsername(event.target.value)}
//           />
//           </div>
//           <label className="font-medium">Password</label>
//           <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="block w-full p-2 border font-thin border-gray-300 rounded text-white"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                 {showPassword ? (
//                   <FiEyeOff onClick={() => setShowPassword(false)} />
//                 ) : (
//                   <FiEye onClick={() => setShowPassword(true)} />
//                 )}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue p-4 my-5 rounded-lg text-white font-semibold w-full">
//             <Link to="/home">Log in</Link>
//           </button>
//           {error && <p className="error-message">{error}</p>}
//         </form>
//         <div className="text-center flex p-2">
//           Do not have an account?
//           <p className="text-blue px-1">
//             <Link className="text-blue px-1" to="/register">Register</Link>
//           </p>
//         </div>
//       </div>
//       </div>


//             );
// }

// export default Login;