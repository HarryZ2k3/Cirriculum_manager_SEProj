import {Link, useNavigate} from 'react-router-dom';
import  {useEffect, useState} from 'react'
import {Axios} from 'axios'
import bg_img from '../LoginSign/assets/register.png';
import logo from '../LoginSign/assets/person.png'
import {FaUserShield} from 'react-icons/fa';
import {BsFillShieldLockFill} from 'react-icons/bs';
import {AiOutlineSwapRight} from 'react-icons/ai';
const Login = () => {
  // Hook 
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState();
  const [statusHolder, setStatusHolder] = useState('message');



  const loginUser = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3007/api/students/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((response)=> {

      console.log()
      if (response.data.message || loginUserName == '' || loginPassword == ''){
        <Link to = {'/'} />
        setLoginStatus=(`Credentials Don't Exist!`)
      }
      else{
        <Link to = {'/home'} />
      }
    })
  }

  useEffect (() => {
    if (loginStatus !== ''){
      setStatusHolder('showMessage') //show message
      setTimeout(() => {
          setStatusHolder('message') //hide it after 4s
      }, 4000);
    }
  },[loginStatus])

  //clear the form on submit
  const onSubmit = () => {
    setLoginUserName('')
    setLoginPassword('')
  }
  return (
    <div className='flex items-center overflow-hidden border border-10 shadow-lg shadow-blue-500/50 m-auto h-screen	w-full'>
        <div className='flex h-3/4 w-9/12 m-auto justify-between border border-10'>
            <div className='flex flex-col w-9/12 h-screen m-auto border border-10 overflow-hidden relative'>
                <img src = {bg_img}></img>
                <div className='relative'>
                    <h2 className = "text-3xl">Create and sell extraordinary Products</h2>
                </div>

                <div className='flex'>
                    <span className='text'> Do not have an account?</span>
                    <Link to = {'/Register'}>
                        <button className='border border-8'>Sign up</button>
                    </Link>
                </div>
            </div>

            <div className='formDiv flex'>
                <div className='headerDiv'>
                    <img src={logo} alt="Logo Image"/>
                    <h3> Welcome Back! </h3>
                </div>

                <form action="" className='form grid'>
                    <span className={statusHolder}>{loginStatus}</span>
                    <div className = 'inputDiv'>
                        <label htmlFor = "username">Username</label>
                        <div className='input flex'>
                            <FaUserShield className='icon'/>
                            <input type = 'text' id = 'username' placeholder='Enter Username'/>
                        </div>
                    </div>

                    <div className = 'inputDiv'>
                        <label htmlFor = "password">Password</label>
                        <div className='input flex'>
                            <BsFillShieldLockFill className='icon'/>
                            <input type = 'text' id = 'password' placeholder='Enter password'/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span>Login</span>
                        <AiOutlineSwapRight className ='icon' />
                    </button>

                    <a href='/home'>Home</a>

                    <span className='forgotPassword'>
                        Forgot your password? <a href ="">Click </a>
                    </span>
                </form>
            </div>

        </div>
        
    </div>
  )
}
export default Login;




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