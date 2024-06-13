import AnimatedRoutes from './AnimatedRoutes'
import Header from './components/Header'
// import Footer from './components/Footer'

export default function App() {
	return (
		<div className="flex h-screen flex-col">
			<Header />
			<div className="flex flex-1 overflow-hidden bg-header_light">
				<AnimatedRoutes />
			</div>
			{/* <Footer /> */}
		</div>
	)
}
