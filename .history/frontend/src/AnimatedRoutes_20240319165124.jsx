import { Routes, Route } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'
import Podcast from './routes/AppLayout/Podcast/Podcast'
import Booklist from './routes/AppLayout/Booklist/Booklist'
import Login from './routes/LoginSign/Login'
import Register from './routes/LoginSign/Register'
import Admin from '../src/admin/Admin'
import AppLayout from './routes/AppLayout/AppLayout'
export default function AnimatedRoutes() {
	return (
		<Routes>
			{/* HOME PAGE */}
			<Route path="/" element={<Home />} />
			{/* LOGIN/REGISTER */}
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route element={<AppLayout />}>
				<Route path="/podcast" element={<Podcast />} />
				<Route path="/booklist" element={<Booklist />} />
			</Route>
            <Route path="/admin" element={<Admin />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
