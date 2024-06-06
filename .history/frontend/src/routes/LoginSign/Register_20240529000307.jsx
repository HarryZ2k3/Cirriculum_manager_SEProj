import Transition from '../../utils/Transition'
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
//import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

// export default function Register() {
// 	return (
// 		<Transition className="flex justify-center items-center flex-col">
// 			<h1 className="text-5xl font-bold">Welcome to the Register page</h1>
//             <Link to ="/" className = "text-primary hover:underline">
//                 Home
//             </Link>
// 		</Transition>
// 	)
// }

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [First_name, setFirst_name] = useState('');
	const [Last_name, setLast_name] = useState('');
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [Phone_number, setPhone_number] = useState('');
	const [User_type] = useState('USER'); // Default user type
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefult();
		if (Password !== confirmPassword) {
			console.error("Passwords do not matching")
			return
		}

		try {
			const response = await axios.post("https://authentication-pf3yfmx32q-uc.a.run.app/user/signup",
			{
				First_name: First_name,
				Last_name: Last_name,
				Password: Password,
				Email: Email,
				Phone_number: Phone_number,
				User_type: User_type,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
			)
			if (response.status === 200) 
				navigate('/login')
			else
				console.error("Failed for register!")
			}
			catch (error) {
				console.error("Error:", error);
		}
	}
	return (
		<Transition className='flex justify-center items-center flex-col h-screen'>
			<div className='flex h-screen'> 
				{/*Left-Image*/}
				<div className='flex w-2/3 flex-grow justify-between rounded-lg'>
					<img src="./assets/register.png" alt="bg img" />
				</div>
				{/*Right-Information*/}
			</div>
					<div className='text-blue font-bold text-4xl w-1/2 justify-center items-center flex flex-col transform -translate-y-8'>
                <div className='text-center'>
                    <p className='p-1 mb-1'>INVENTORY</p>
                    <p className='p-1 mb-1'>MANAGEMENT</p>
                    <p className='p-1'>SYSTEM</p>
                    <p className='p-1 smaller-text'> Group 1</p>                    
                </div>
                
                {/* <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '10px'}}>
                    <img src="login_asset/shiba.png" alt="Image 1" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="login_asset/tram.png" alt="Image 2" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="login_asset/quynh.png" alt="Image 3" style={{ width: '33.33%', margin: '0 1%' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="login_asset/Sang.png" alt="Image 1" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="login_asset/nghia.png" alt="Image 2" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="login_asset/na.png" alt="Image 3" style={{ width: '33.33%', margin: '0 1%' }} />
                    <img src="login_asset/huy.png" alt="Image 4" style={{ width: '33.33%', margin: '0 1%' }} />
                </div> */}
        </div>




      <div className='flex flex-col w-1/2 items-center justify-center'>
        <form className='w-1/2' onSubmit={handleRegister}>
          <p className='text-3xl mb-5 font-semibold'>Sign Up</p>
          <div className='flex gap-4 py-3'>
            <div className='flex-1'>
              <label>First Name</label>
              <input
                type="text"
                className='block w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your first name'
                value={First_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div className='flex-1'>
              <label>Last Name</label>
              <input
                type="text"
                className='block w-full p-2 border border-gray-300 rounded'
                placeholder='Enter your last name'
                value={Last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>
          </div>
          <div className='py-3'>
            <label>Email</label>
            <input
              type="email"
              className='block w-full p-2 border border-gray-300 rounded'
              placeholder='Enter your email'
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='py-3'>
            <label>Phone Number</label>
            <input
              type="text"
              className='block w-full p-2 border border-gray-300 rounded'
              placeholder='Enter your phone number'
              value={Phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </div>
          <div className='py-3'>
            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full p-2 border border-gray-300 rounded"
                placeholder='Input password'
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                {showPassword ? (
                  <FiEyeOff onClick={() => setShowPassword(false)} />
                ) : (
                  <FiEye onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div>
          </div>
          <div className='py-3'>
            <label>Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full p-2 border border-gray-300 rounded"
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                {showPassword ? (
                  <FiEyeOff onClick={() => setShowPassword(false)} />
                ) : (
                  <FiEye onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div>
          </div>
          <button type="submit" className='bg-blue p-3 rounded-lg text-white font-semibold w-full'>Sign up</button>
        </form>
        <div className='text-center flex mt-3'>
          Already have an account?
          <p className='text-sky-500 ml-1'><Link to="/login">Log in</Link></p>
        </div>
      </div>
		</Transition>
	
	)
}
export default Register;


//   return (

//   );
// };

// export default SignUp;