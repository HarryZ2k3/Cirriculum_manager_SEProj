import { Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
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
			{/* <Route path="/admin" element = {<Admin/>}/> */}
		</Routes>
	)
}