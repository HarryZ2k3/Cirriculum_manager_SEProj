import AnimatedRoutes from './AnimatedRoutes'
import Header from './components/Header'
import NavBar from './components/NavBar'
export default function App() {
	return (
		<div className="flex h-screen flex-col">
			<div className = "flex">
			<Header />
			<NavBar />
			</div>
			<div className="flex flex-1 overflow-hidden bg-gray-800">
				<AnimatedRoutes />
			</div>
		</div>
	)
}
