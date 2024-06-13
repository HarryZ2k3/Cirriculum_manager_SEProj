import {Routes, Route, Navigate} from "react-router-dom"
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
// Pages
import Login from './pages/Login'
//import NotFound from './pages/NotFound'
import Chat from "./pages/Chat";
//import Profile from "./pages/Profile/Profile"
import Subject from "./pages/Subject/Subject"
import Admin from "./pages/Admin/Admin"
import Schedule from "./pages/Schedule/Schedule"
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import Home from "./pages/Home/Home"
export default function AnimatedRoutes() {
    const {user} = useContext(AuthContext);
    return (
     <ChatContextProvider user ={user}>
                         <Route path="/admin" element={user && user.role === 'admin' ? <Admin /> : <Navigate to="/" />} />

          <Routes>
               <Route path= "/" element ={user ? <Home/> : <Login/>}/>
               <Route path= "/login" element ={<Login/>}/>
               <Route path= "*" element ={<Navigate to ="/" />} />
               <Route path="/chat" element={user ? <Chat /> : <Navigate to="/" />} />
               <Route path="/schedule" element={user ? <Schedule /> : <Navigate to="/" />} />
               {/* <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} /> */}
               {/* <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} /> */}
               <Route path="/subject" element={user ? <Subject /> : <Navigate to="/" />} />
           </Routes>
     </ChatContextProvider>
	)
}