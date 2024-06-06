// import { useState } from "react";
// import './Login.css'

// import user_icon from './assets/person.png'
// import email_icon from './assets/email.png'
// import password_icon from './assets/password.png'

// const Login = ()=>{

//     const [action, setAction] = useState("Login");

//     return (
//         <div className="container">
//             <div className="header">
//                 <div className="text">{action}</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 {action==="Login"?<div></div>:<div className="input">
//                     <img src={user_icon} alt="" />
//                     <input type="text" placeholder="ID"/>
//                 </div>}
                

//                 <div className="input">
//                     <img src={email_icon} alt="" />
//                     <input type="email" placeholder="Email"/>
//                 </div>

//                 <div className="input">
//                     <img src={password_icon} alt="" />
//                     <input type="password" placeholder="Password"/>
//                 </div>
//             </div>

//             {action==="Sign Up"?<div></div>:<div className="forgot-pass">Forget password? <span>Click here!</span></div>}

//             <div className="submit-container">
//                 <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//                 <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

//             </div>
//         </div>
//     );
// };

// export default Login



import Transition from '../../utils/Transition'
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { useState } from 'react';
import bg_img from '../LoginSign/assets/register.png'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://authentication-pf3yfmx32q-uc.a.run.app/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.table(response.data);
        const { token, first_name, last_name, phone_number, email, user_type } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("first_name", first_name);
        localStorage.setItem("last_name", last_name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone_number", phone_number);
        localStorage.setItem("user_type", user_type);

        // Call testToken after successful login
        await testToken();

        navigate("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const testToken = async () => {
    try {
      const response = await axios.post(
        "https://luoi-lot-ca-pf3yfmx32q-de.a.run.app/api/huh",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Test token response:", response.data);
    } catch (error) {
      console.error("Error testing token:", error);
    }
  };
	return (
		<Transition className='flex flex-grow bg-gradient-to-b from-background_top from-0% via-background_mid via-66% to-background_bottom to-100%'>
			{/*Left-Image*/}
			<div className='flex w-2/3 flex-grow flex-col overflow-hidden px-8 py-2 rounded-lg'>
				<div className='text-center font-bold flex text-4xl justify-center items-center flex flex-col py-4'>
					<p className='p-1 mb-2'>Student Records Management</p>
					<p className='p-1 smaller-text'> Group 1</p>                    
				</div>
				<img src={bg_img} alt="" />
			</div>
			{/*Right-Information*/}
			<div className="flex w-3/4 flex-grow flex-col justify-between overflow-y-auto px-8 py-5 rounded-lg items-center">
                {/* <div className="flex flex-col w-1/2 items-center justify-center font-bold">
                    <form className="w-3/4 gap-6" onSubmit={handleLogin}>
                        <p className="text-3xl mb-5">Log in</p>
                        <label className="font-medium">Email</label>
                        <input
                            type="text"
                            className="block w-full p-2 border border-gray-300 rounded font-thin"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="font-medium">Password</label>
                        <div className="relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            className="block w-full p-2 border font-thin border-gray-300 rounded"
                            placeholder="Input password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                {showPassword ? (<FiEyeOff onClick={() => setShowPassword(false)} />) : (<FiEye onClick={() => setShowPassword(true)} />)}
                            </div>
                        </div>
                        <button type="submit" className="flex items-center justify-center gap-2 p-4 my-5 rounded-full bg-card_home px-4 py-1 text-black font-semibold w-full">Log in</button>
                    </form>
                    <div className="text-center flex p-2">
                        Don't have an account?
                        <p className="text-blue px-1">
                            <Link to="/signup">Register</Link>
                        </p>
                    </div>
                </div> */}


                <form action="" className='form grid'>
                  <sp
                </form>
            </div>
		</Transition>
	
	)
}
export default Login;