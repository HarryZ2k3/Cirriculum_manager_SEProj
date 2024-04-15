// import AnimatedRoutes from './AnimatedRoutes'
// <<<<<<< HEAD
// import Header from './components/Header'
// // import Footer from './components/Footer'
// =======
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import LoginSignUp from './routes/LoginSign/LoginSignUp/LoginSignUp'
// >>>>>>> main

// export default function App() {
// 	return (
// 		<div className="flex h-screen flex-col">
// 			<Header />
// 			<div className="flex flex-1 overflow-hidden">
// 				<AnimatedRoutes />
// 			</div>
// 			{/* <Footer /> */}
// 		</div>
// 	)
// }

import './App.css'
import AnimatedRoutes from './AnimatedRoutes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LoginSignUp from './routes/LoginSign/LoginSignUp/LoginSignUp'

  export default function App() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <AnimatedRoutes />
        <Footer/>
      </div>
    )
  }