import { Routes, Route } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'

export default function AnimatedRoutes() {
	return (
		<Routes>
			{/* HOME PAGE */}
			<Route path="/" element={<Home />} />

			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
