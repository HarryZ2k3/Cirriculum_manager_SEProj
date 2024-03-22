
import './App.css'
import AnimatedRoutes from './AnimatedRoutes'
import Header from './components/Header/Header'

  export default function App() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <AnimatedRoutes />
      </div>
    )
  }