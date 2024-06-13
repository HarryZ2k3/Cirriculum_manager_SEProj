// import { useContext } from "react";
// import {Alert, Button, Form, Row,Col,Stack} from "react-bootstrap";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//     const {loginUser,
//         loginError,
//         loginInfo,
//         updateLoginInfo,
//         isLoginLoading} = useContext(AuthContext);
//     return ( 
//     <>
//     <Form onSubmit={loginUser}>
//         <Row style = {{
//             height: "100vh",
//             justifyContent: "center",
//             paddingTop : "10%"
//         }}>
//             <Col xs ={6}>
//                 <Stack gap={3}>
//                     <h2>
//                         Login
//                     </h2>
//                     <Form.Control 
//                     type= "StudentId" 
//                     placeholder = "StudenID" 
//                     onChange = {(e) => 
//                         updateLoginInfo({...loginInfo, StudentId:e.target.value})
//                     }/>
//                     <Form.Control 
//                     type= "Password" 
//                     placeholder = "Password" 
//                     onChange = {(e) => 
//                         updateLoginInfo({...loginInfo, Password:e.target.value})
//                     }
//                     />
//                     <Button variant ="primary" type = "submit">
//                         {isLoginLoading?"Getting you in..." : "Login"}
//                     </Button>
//                     {loginError?.error &&  <Alert variant = "danger"> 
//                         <p> 
//                             {loginError?.message}
//                         </p>
//                     </Alert>}
                   
//                 </Stack>
//             </Col>
//         </Row>
//     </Form>
//     </> 
//     );
// }
 
// export default Login;


// import { useContext } from "react";
// import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//     const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } = useContext(AuthContext);

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <Form onSubmit={loginUser} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
//                 <div className="flex justify-center mb-4">
//                     <a href="#" className="mx-2"><img src="/path-to-facebook-icon.png" alt="Facebook" className="w-6 h-6" /></a>
//                     <a href="#" className="mx-2"><img src="/path-to-twitter-icon.png" alt="Twitter" className="w-6 h-6" /></a>
//                     <a href="#" className="mx-2"><img src="/path-to-linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" /></a>
//                 </div>
//                 <Form.Group className="mb-4">
//                     <input 
//                         type="text" 
//                         placeholder="Username" 
//                         onChange={(e) => updateLoginInfo({ ...loginInfo, username: e.target.value })}
//                         className="p-2 border rounded w-full"
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-4">
//                     <Form.Control 
//                         type="password" 
//                         placeholder="Password" 
//                         onChange={(e) => updateLoginInfo({ ...loginInfo, Password: e.target.value })}
//                         className="p-2 border rounded w-full"
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-4">
//                     <Form.Check 
//                         type="checkbox" 
//                         label="Remember me" 
//                         className="text-sm"
//                     />
//                 </Form.Group>
//                 <Button 
//                     variant="primary" 
//                     type="submit" 
//                     className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                 >
//                     {isLoginLoading ? "Getting you in..." : "Login"}
//                 </Button>
//                 {loginError?.error && (
//                     <Alert variant="danger" className="mt-4">
//                         <p>{loginError?.message}</p>
//                     </Alert>
//                 )}
//                 <div className="text-center mt-4 text-sm">
//                     <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
//                     <p className="mt-2">Do have an account? <a href="#" className="text-blue-500 hover:underline">Register</a></p>
//                 </div>
//             </Form>
//         </div>
//     );
// }

// export default Login;

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } = useContext(AuthContext);
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <form onSubmit={loginUser} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <div className="mb-4 w-full">
                    <input
                        type="text"
                        placeholder="StudentID"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => updateLoginInfo({ ...loginInfo, StudentId: e.target.value })}
                    />
                </div>
                <div className="mb-4 w-full">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => updateLoginInfo({ ...loginInfo, Password: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    {isLoginLoading ? "Getting you in..." : "Login"}
                </button>
                {loginError?.error && (
                    <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md w-full">
                        <p>{loginError?.message}</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Login;
