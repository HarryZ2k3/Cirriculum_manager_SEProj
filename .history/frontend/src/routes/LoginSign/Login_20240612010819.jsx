// import {Link} from 'react-router-dom';
// import  {useEffect, useState} from 'react'
// import {Axios} from 'axios'
// import bg_img from '../LoginSign/assets/register.png';
// import logo from '../LoginSign/assets/person.png'
// import {FaUserShield} from 'react-icons/fa';
// import {BsFillShieldLockFill} from 'react-icons/bs';
// import {AiOutlineSwapRight} from 'react-icons/ai';
// const Login = () => {
//   // Hook 
//   const [loginUserName, setLoginUserName] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [loginStatus, setLoginStatus] = useState();
//   const [statusHolder, setStatusHolder] = useState('message');


//   const loginUser = (e) => {
//     e.preventDefault();

//     Axios.post('http://localhost:3012/login', {
//       LoginUserName: loginUserName,
//       LoginPassword: loginPassword,
//     }).then((response)=> {

//       console.log()
//       if (response.data.message || loginUserName == '' || loginPassword == ''){
//         <Link to = {'/'} />
//         setLoginStatus('Credentials Do not Exist!')
//       }
//       else{
//         <Link to = {'/home'} />
//       }
//     })
//   }

//   useEffect (() => {
//     if (loginStatus !== ''){
//       setStatusHolder('showMessage') //show message
//       setTimeout(() => {
//           setStatusHolder('message') //hide it after 4s
//       }, 4000);
//     }
//   },[loginStatus])

//   //clear the form on submit
//   const onSubmit = () => {
//     setLoginUserName('')
//     setLoginPassword('')
//   }
//   return (
//     <div className='flex items-center overflow-hidden border border-10 shadow-lg shadow-blue-500/50 m-auto h-screen	w-full'>
//         <div className='flex h-3/4 w-9/12 m-auto justify-between border border-10'>
//             <div className='flex flex-col w-9/12 h-screen m-auto border border-10 overflow-hidden relative'>
//                 <img src = {bg_img}></img>
//                 <div className='relative'>
//                     <h2 className = "text-3xl">Create and sell extraordinary Products</h2>
//                 </div>

//                 <div className='flex'>
//                     <span className='text'> Do not have an account?</span>
//                     <Link to = {'/Register'}>
//                         <button className='border border-8'>Sign up</button>
//                     </Link>
//                 </div>
//             </div>

//             <div className='formDiv flex'>
//                 <div className='headerDiv'>
//                     <img src={logo} alt="Logo Image"/>
//                     <h3> Welcome Back! </h3>
//                 </div>

//                 <form action="" className='form grid' onSubmit={onSubmit}>
//                     <span className={statusHolder}>{loginStatus}</span>
//                     <div className = 'inputDiv'>
//                         <label htmlFor = "username">Username</label>
//                         <div className='input flex'>
//                             <FaUserShield className='icon'/>
//                             <input type = 'text' id = 'username' placeholder='Enter Username'
//                                     onChange={(event) => {
//                                     setLoginUserName(event.target.value)
//                             }}/>
//                         </div>
//                     </div>

//                     <div className = 'inputDiv'>
//                         <label htmlFor = "password">Password</label>
//                         <div className='input flex'>
//                             <BsFillShieldLockFill className='icon'/>
//                             <input type = 'text' id = 'password' placeholder='Enter password'
//                                     onChange={(event) => {
//                                     setLoginPassword(event.target.value)
//                             }}/>
//                         </div>
//                     </div>

//                     <button type='submit' className='btn flex' onClick = {loginUser}>
//                         <span>Login</span>
//                         <AiOutlineSwapRight className ='icon' />
//                     </button>

//                     <a href='/home'>Home</a>

//                     <span className='forgotPassword'>
//                         Forgot your password? <a href ="">Click </a>
//                     </span>
//                 </form>
//             </div>

//         </div>
        
//     </div>
//   )
// }
// export default Login;


import { useContext } from "react";
import {Alert, Button, Form, Row,Col,Stack} from "react-bootstrap";
import { AuthContext } from "../components/AuthContext";
import from "../../"
const Login = () => {
    const {loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading} = useContext(AuthContext);
    return ( 
    <>
    <Form onSubmit={loginUser}>
        <Row style = {{
            height: "100vh",
            justifyContent: "center",
            paddingTop : "10%"
        }}>
            <Col xs ={6}>
                <Stack gap={3}>
                    <h2>
                        Login
                    </h2>
                    <Form.Control 
                    type= "StudentId" 
                    placeholder = "StudenID" 
                    onChange = {(e) => 
                        updateLoginInfo({...loginInfo, StudentId:e.target.value})
                    }/>
                    <Form.Control 
                    type= "Password" 
                    placeholder = "Password" 
                    onChange = {(e) => 
                        updateLoginInfo({...loginInfo, Password:e.target.value})
                    }
                    />
                    <Button variant ="primary" type = "submit">
                        {isLoginLoading?"Getting you in..." : "Login"}
                    </Button>
                    {loginError?.error &&  <Alert variant = "danger"> 
                        <p> 
                            {loginError?.message}
                        </p>
                    </Alert>}
                   
                </Stack>
            </Col>
        </Row>
    </Form>
    </> 
    );
}
 
export default Login;