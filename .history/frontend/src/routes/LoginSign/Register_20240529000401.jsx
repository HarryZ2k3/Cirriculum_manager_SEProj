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
				<div className='font-bold text-4xl w-1/2 justify-center items-center flex flex-col transform -translate-y-8'>
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