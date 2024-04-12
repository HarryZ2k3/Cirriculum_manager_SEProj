import Transition from '../../utils/Transition'
import { Link } from 'react-router-dom'

// export default function Login() {
// 	return (
// 		<Transition className="flex justify-center items-center flex-col">
// 			<h1 className="text-5xl font-bold">Welcome to the Login page</h1>
//             <Link to ="/register" className = "text-primary hover:underline">
//                 Register
//             </Link>
// 		</Transition>
// 	)
// }
import { useState } from "react";
import './LoginSignUp.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignUp = ()=>{

    const [action, setAction] = useState("Login");

    return (
		<Transition className="flex justify-center items-center flex-col">

		</Transition>
    );
};

export default LoginSignUp