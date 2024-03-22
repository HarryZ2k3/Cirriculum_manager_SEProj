import { Routes, Route } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'
import Login from './routes/LoginSign/Login'
import Register from './routes/LoginSign/Register'
export default function AnimatedRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/" element={<Home />} />
			
			<Route path="/login" element= {<Login/>} />
			<Route path="/register" element= {<Register/>} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
