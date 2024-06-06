import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'
import Login from './routes/LoginSign/Login'
import Register from './routes/LoginSign/Register'
import Grade from './routes/Subject/Grade'
import Subject from './routes/Subject/Subject'
import Schedule from './routes/Schedule/Schedule'
import Profile from './routes/Profile/Profile'
import Edit from './routes/Edit/Edit'
import Admin from './routes/Admin/Admin'
import System from './routes/System.jsx'
//import PageLayout from  './routes/pageLayout.jsx'
// import SignUp from './routes/LoginSign/Register.jsx'

//import Social from "./routes/Social/Social"
// import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
//import {Container} from "react-bootstrap"
// import { AuthContext } from "../../backend/chat/Client/src/context/AuthContext";
//import { ChatContextProvider } from "../../backend/chat/Client/src/context/ChatContext";

export default function AnimatedRoutes() {
	// const {user} = useContext(AuthContext)
	return (

		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path='' element={<System/>}>
				{/* <Route path='' element={<PageLayout/>}> */}
					<Route path="/home" element={<Home />} />
					<Route path="/grade" element={<Grade />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/edit" element={<Edit />} />
					<Route path="/subject" element={<Subject />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/admin" element = {<Admin/>}/>
					<Route path="/social" element = {<Social/>}/>
				</Route>
			{/* </Route> */}
		</Routes>
	)
}
