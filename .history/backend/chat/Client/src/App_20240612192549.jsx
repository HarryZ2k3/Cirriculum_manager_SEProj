import AnimatedRoutes from './AnimatedRoutes'
import Header from './components/Header'
// import Footer from './components/Footer'
import NavBar from './components/NavBar'
export default function App() {
	return (
		<div className="flex h-screen flex-col">
?			<NavBar />
			<div className="flex flex-1 overflow-hidden bg-gray-800">
				<AnimatedRoutes />
			</div>
			{/* <Footer /> */}
		</div>
	)
}
