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