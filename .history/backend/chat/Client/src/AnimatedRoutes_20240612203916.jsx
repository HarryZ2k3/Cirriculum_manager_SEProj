// import {Routes, Route, Navigate} from "react-router-dom"
// import Chat from "./pages/Chat";
// import Login from "./pages/Login";
// // import Home from "./pages/Home/Home"
// import { useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"
// import {Container} from "react-bootstrap"
// import NavBar from "./components/NavBar";
// import { AuthContext } from "./context/AuthContext";
// import { ChatContextProvider } from "./context/ChatContext";
// function App() {
//   const {user} = useContext(AuthContext);
//   return (
//     <ChatContextProvider user ={user}>
//       <NavBar />
//       <Container >
//         <Routes>
//           <Route path= "/" element ={user ? <Chat/> : <Login/>}/>
//           <Route path= "/login" element ={<Login/>}/>
//           {/* <Route path= "/home" element ={<Home/>}/> */}
//           <Route path= "*" element ={<Navigate to ="/" />} />
//         </Routes>
//       </Container>
//     </ChatContextProvider> 
    
//   )
// }

// export default App;

import {Routes, Route, Navigate} from "react-router-dom"
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
// Pages
import Login from './pages/Login'
//import NotFound from './pages/NotFound'
import Chat from "./pages/Chat";
import Proile from "./pages/Profile/Profile"
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import Home from "./pages/Home/Home"
export default function AnimatedRoutes() {
    const {user} = useContext(AuthContext);
    return (
     <ChatContextProvider user ={user}>
          <Routes>
               <Route path= "/" element ={user ? <Home/> : <Login/>}/>
               <Route path= "/login" element ={<Login/>}/>
               <Route path= "*" element ={<Navigate to ="/" />} />
               <Route path="/chat" element={user ? <Chat /> : <Navigate to="/login" />} />
           </Routes>
     </ChatContextProvider>
	)
}