
import './App.css'
import AnimatedRoutes from './AnimatedRoutes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

  export default function App() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <AnimatedRoutes />
        <Footer/>
      </div>
    )
  }