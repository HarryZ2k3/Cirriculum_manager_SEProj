import { Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'
import Login from './routes/LoginSign/Login'
import Register from './routes/LoginSign/Register'
import Social from './routes/Social/Social'
import Subject from './routes/Subject/Subject'
import Schedule from './routes/Schedule/Schedule'
import LoginSignUp from './routes/LoginSign/LoginSignUp/LoginSignUp'
import Profile from './routes/Profile/Profile'
export default function AnimatedRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/grade" element={<Grade />} />
			<Route path="/subject" element={<Subject />} />
			<Route path="/schedule" element={<Schedule />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/loginv2" element={<LoginSignUp/>}/>
		</Routes>
	)
}
