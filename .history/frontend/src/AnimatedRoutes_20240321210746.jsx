import { Routes, Route } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'
import Login from './routes/LoginSign/Login'
export default function AnimatedRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element= {<Login/>} />
			<Route path="/register" element= {<Re/>} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
