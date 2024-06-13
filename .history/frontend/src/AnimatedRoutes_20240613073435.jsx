import { Routes, Route } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Edit from './routes/Edit/Edit'
import Admin from './routes/Admin/Admin'
export default function AnimatedRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Admin />} />
			<Route path="/edit" element={<Edit />} />
			<Route path="*" element={<NotFound />} />
			{/* <Route path="/admin" element = {<Admin/>}/> */}
		</Routes>
	)
}