import {Link} from 'react-router-dom';
import bg_img from '../LoginSign/assets/register.png';
import logo from '../LoginSign/assets/person.png'
import {FaUserShield} from 'react-icons/fa';
import {BsFillShieldLockFill} from 'react-icons/bs';
import {AiOutlineSwapRight} from 'react-icons/ai';

const Register = () => {
	return (
		<div className='loginPage flex'>
        <div className='contanier flex'>
            <div className='videoDiv'>
                <img src = {bg_img}></img>
                <div className='textDiv'>
                    <h2 className = "title">Create and sell extraordinary Products</h2>
                    <p> Adopt the pace of nature!</p>
                </div>

                <div className='footerDiv flex'>
                    <span className='text'> Have an account?</span>
                    <Link to = {'/'}>
                        <button className='btn'>Sign up</button>
                    </Link>
                </div>
            </div>

            <div className='formDiv flex'>
                <div className='headerDiv'>
                    <img src={logo} alt="Logo Image"/>
                    <h3> Join to your Land </h3>
                </div>

                <form action="" className='form grid'>

				<div className = 'inputDiv'>
                        <label htmlFor = "username">Username</label>
                        <div className='input flex'>
                            <FaUserShield className='icon'/>
                            <input type = 'text' id = 'username' placeholder='Enter Username'/>
                        </div>
                    </div>
					
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
                        <span>Register</span>
                        <AiOutlineSwapRight className ='icon' />
                    </button>

                    <span className='forgotPassword'>
                        Forgot your password? <a href ="">Click </a>
                    </span>
                </form>
            </div>

        </div>
        
    </div>
	)
}

export default Register;


// import Transition from '../../utils/Transition'
// import { Link, useNavigate } from 'react-router-dom'
// import { FiEye, FiEyeOff } from 'react-icons/fi';
// import axios from 'axios';
// import { useState } from 'react';
// import bg_img from '../LoginSign/assets/register.png'

// const Register = () => {
// 	const [showPassword, setShowPassword] = useState(false);
// 	const [First_name, setFirst_name] = useState('');
// 	const [Last_name, setLast_name] = useState('');
// 	const [Email, setEmail] = useState('');
// 	const [Password, setPassword] = useState('');
// 	const [confirmPassword, setConfirmPassword] = useState('');
// 	const [Phone_number, setPhone_number] = useState('');
// 	const [User_type] = useState('USER'); // Default user type
// 	const navigate = useNavigate();

// 	const handleRegister = async (e) => {
// 		e.preventDefult();
// 		if (Password !== confirmPassword) {
// 			console.error("Passwords do not matching")
// 			return
// 		}

// 		try {
// 			const response = await axios.post("https://authentication-pf3yfmx32q-uc.a.run.app/user/signup",
// 			{
// 				First_name: First_name,
// 				Last_name: Last_name,
// 				Password: Password,
// 				Email: Email,
// 				Phone_number: Phone_number,
// 				User_type: User_type,
// 			},
// 			{
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			}
// 			)
// 			if (response.status === 200) 
// 				navigate('/login')
// 			else
// 				console.error("Failed for register!")
// 			}
// 			catch (error) {
// 				console.error("Error:", error);
// 		}
// 	}
// 	return (
// 		<Transition className='flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%'>
// 			{/*Left-Image*/}
// 			<div className='flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-2 rounded-lg'>
// 				<div className='text-center font-bold flex text-4xl justify-center items-center flex-col py-4'>
// 					<p className='p-1 mb-2'>Student Records Management</p>
// 					<p className='p-1 smaller-text'> Group 1</p>                    
// 				</div>
// 				<img src={bg_img} alt="" />
// 			</div>
// 			{/*Right-Information*/}
// 			<div className="flex w-3/4 flex-grow flex-col justify-between overflow-y-auto px-8 py-5 rounded-lg items-center">
// 				<form className='w-3/4' onSubmit={handleRegister}>
// 				<p className='text-4xl mb-5 font-semibold text-center'>Register</p>
// 				<div className='flex gap-4 py-2'>
// 					<div className='flex-1'>
// 						<label>First Name</label>
// 						<input
// 							type="text"
// 							className='block w-full p-2 border border-gray-300 rounded'
// 							placeholder='First name'
// 							value={First_name}
// 							onChange={(e) => setFirst_name(e.target.value)}
// 						/>
// 					</div>

// 					<div className='flex-1'>
// 						<label>Last Name</label>
// 						<input
// 							type="text"
// 							className='block w-full p-2 border border-gray-300 rounded'
// 							placeholder='Last name'
// 							value={Last_name}
// 							onChange={(e) => setLast_name(e.target.value)}
// 						/>
// 					</div>
// 				</div>

// 				<div className='py-3'>
// 					<label>Email</label>
// 					<input
// 						type="email"
// 						className='block w-full p-2 border border-gray-300 rounded'
// 						placeholder='Email confirmation'
// 						value={Email}
// 						onChange={(e) => setEmail(e.target.value)}
// 					/>
// 				</div>
// 				<div className='py-3'>
// 					<label>Phone Number</label>
// 					<input
// 						type="text"
// 						className='block w-full p-2 border border-gray-300 rounded'
// 						placeholder='Phone number'
// 						value={Phone_number}
// 						onChange={(e) => setPhone_number(e.target.value)}
// 					/>
// 				</div>

// 				<div className='py-3'>
// 					<label>Password</label>
// 					<div className="relative">
// 						<input
// 							type={showPassword ? "text" : "password"}
// 							className="block w-full p-2 border border-gray-300 rounded"
// 							placeholder='Password'
// 							value={Password}
// 							onChange={(e) => setPassword(e.target.value)}
// 						/>
// 						<div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
// 							{showPassword ? (<FiEyeOff onClick={() => setShowPassword(false)} />) : (<FiEye onClick={() => setShowPassword(true)} />)}
// 						</div>
// 					</div>
// 				</div>

// 				<div className='py-3'>
// 					<label>Confirm Password</label>
// 					<div className="relative">
// 						<input
// 							type={showPassword ? "text" : "password"}
// 							className="block w-full p-2 border border-gray-300 rounded"
// 							placeholder='Confirm password'
// 							value={confirmPassword}
// 							onChange={(e) => setConfirmPassword(e.target.value)}
// 						/>
// 						<div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
// 							{showPassword ? (<FiEyeOff onClick={() => setShowPassword(false)} />) : (<FiEye onClick={() => setShowPassword(true)} />)}
// 						</div>
// 					</div>
// 				</div>
// 				<button type="submit" className='bg-blue p-3 rounded-lg text-black font-semibold w-full'>Sign up</button>
// 				</form>
// 				<div className='text-center flex mt-3'>
// 					Already have an account?
// 					<p className='text-sky-500 ml-1'><Link to="/login">Log in</Link></p>
// 				</div>
// 			</div>
// 		</Transition>
	
// 	)
// }
// export default Register;

