import Transition from '../../utils/Transition'
//import { Link } from 'react-router-dom'

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
import ''../LoginSignUp.

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignUp = ()=>{

    const [action, setAction] = useState("Login");

    return (
		<Transition className="flex justify-center items-center flex-col">
			<div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="ID"/>
                </div>}
                

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email"/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>

            {action==="Sign Up"?<div></div>:<div className="forgot-pass">Forget password? <span>Click here!</span></div>}

            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

            </div>
        </div>
		</Transition>
    );
};

export default LoginSignUp