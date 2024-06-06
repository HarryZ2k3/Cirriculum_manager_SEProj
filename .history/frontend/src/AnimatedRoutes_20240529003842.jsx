import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'
import Login from './routes/LoginSign/Login'
import Register from './routes/LoginSign/Register'
import Grade from './routes/Subject/Grade'
import Subject from './routes/Subject/Subject'
import Schedule from './routes/Schedule/Schedule'
import LoginSignUp from './routes/LoginSign/LoginSignUp/LoginSignUp'
import Profile from './routes/Profile/Profile'
import Edit from './routes/Edit/Edit'
import Admin from './routes/Admin/Admin'
import System from './routes/System.jsx'
import SignUp from './routes/LoginSign/Register.jsx'


export default function AnimatedRoutes() {
	return (

		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path='' element={<System/>}>
				<Route path="/Home" element={<Home />} />
				<Route path="/grade" element={<Grade />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="/subject" element={<Subject />} />
				<Route path="/schedule" element={<Schedule />} />
				{/* <Route path="/login" element={<Login />} /> */}
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/loginv2" element={<LoginSignUp/>}/>
				<Route path="/admin" element = {<Admin/>}/>
				<Route path="/grade" element = {<Grade/>}/>
			</Route>
		</Routes>
	)
}
import Chat from "../../../"
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import NavBar from "./components/NavBar";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
function App() {
  const {user} = useContext(AuthContext);
  return (
    <ChatContextProvider user ={user}>
    <NavBar />
    <Container >
    <Routes>
      <Route path= "/" element ={user ? <Chat/> : <Login/>}/>
      <Route path= "/login" element ={<Login/>}/>
      <Route path= "*" element ={<Navigate to ="/" />} />
    </Routes>
    </Container>
    </ChatContextProvider> 
    
  )
}

export default App
