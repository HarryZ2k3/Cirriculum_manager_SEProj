// import { Routes, Route, Navigate } from 'react-router-dom'

// // Pages
// import NotFound from './pages/NotFound'
// import Home from './routes/Home/Home'
// import Login from './routes/LoginSign/Login'
// import Register from './routes/LoginSign/Register'
// import Grade from './routes/Subject/Grade'
// import Subject from './routes/Subject/Subject'
// import Schedule from './routes/Schedule/Schedule'
// import Chat from './routes/Social/ChatPage'
// import Profile from './routes/Profile/Profile'
// import Edit from './routes/Edit/Edit'
// import Admin from './routes/Admin/Admin'
// //import System from './routes/System.jsx'
// //import PageLayout from  './routes/pageLayout.jsx'
// import "bootstrap/dist/css/bootstrap.min.css"


// const App = () => {


//   return (
// 	<Routes>
// 		<Route path="/" element={<Navigate to="/login" />} />
// 		<Route path="/login" element={<Login />} />
// 		<Route path="/register" element={<Register />} />
// 		{/* <Route path='' element={<System/>}> */}
// 				<Route path="/home" element={<Home />} />
// 				<Route path="/grade" element={<Grade />} />
// 				<Route path="/profile" element={<Profile />} />
// 				<Route path="/edit" element={<Edit />} />
// 				<Route path="/subject" element={<Subject />} />
// 				<Route path="/schedule" element={<Schedule />} />
// 				<Route path="/register" element={<Register />} />
// 				<Route path="*" element={<NotFound />} />
// 				<Route path="/admin" element = {<Admin/>}/>
// 				<Route path="/social" element = {<Chat/>}/>
// 		{/* </Route> */}
// 	</Routes>
//   );
// }

// export default App;


import {Routes, Route, Navigate} from "react-router-dom"
// import Chat from "./pages/Chat";
import Chat from './routes/Chat/Chat'
import Login from "./routes/LoginSign/Login";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import NavBar from "./components/NavBar";
import { AuthContext } from "./components/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import from "./"
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
