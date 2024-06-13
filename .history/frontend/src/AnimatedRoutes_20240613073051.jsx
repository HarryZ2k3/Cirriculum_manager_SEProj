import { Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'
import Login from './routes/LoginSign/Login'
import Register from './routes/LoginSign/Register'
import Profile from './routes/Profile/Profile'
import Edit from './routes/Edit/Edit'
import Admin from './routes/Admin/Admin'
export default function AnimatedRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Admin />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/edit" element={<Edit />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/admin" element = {<Admin/>}/>
		</Routes>
	)
}