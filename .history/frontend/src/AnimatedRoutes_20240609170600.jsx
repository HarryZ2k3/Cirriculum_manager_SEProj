import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import NotFound from './pages/NotFound'
import Home from './routes/Home/Home'
import Login from './routes/LoginSign/Login'
import Register from './routes/LoginSign/Register'
import Grade from './routes/Subject/Grade'
import Subject from './routes/Subject/Subject'
import Schedule from './routes/Schedule/Schedule'
import Profile from './routes/Profile/Profile'
import Edit from './routes/Edit/Edit'
import Admin from './routes/Admin/Admin'
//import System from './routes/System.jsx'
//import PageLayout from  './routes/pageLayout.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

// export default function AnimatedRoutes() {
// 	return (

		// <Routes>
		// 	<Route path="/" element={<Navigate to="/login" />} />
		// 	<Route path="/login" element={<Login />} />
		// 	<Route path="/register" element={<Register />} />
		// 	{/* <Route path='' element={<System/>}> */}
		// 		{/* <Route path='' element={<PageLayout/>}> */}
		// 			<Route path="/home" element={<Home />} />
		// 			<Route path="/grade" element={<Grade />} />
		// 			<Route path="/profile" element={<Profile />} />
		// 			<Route path="/edit" element={<Edit />} />
		// 			<Route path="/subject" element={<Subject />} />
		// 			<Route path="/schedule" element={<Schedule />} />
		// 			<Route path="/register" element={<Register />} />
		// 			<Route path="*" element={<NotFound />} />
		// 			<Route path="/admin" element = {<Admin/>}/>
		// 			{/* <Route path="/social" element = {<Social/>}/> */}
		// 		{/* </Route> */}
		// 	{/* </Route> */}
		// </Routes>
// 	)
// }



import PageLayout from "./PageLayout.jsx";
import Export from "./pages/Export.jsx";
import ExportHistory from "./pages/ExportHistory.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import withAuthorization from "./pages/withAuthorization.jsx";

const App = () => {

  const AuthorizedExport = withAuthorization(Export, ["ADMIN"]);
  const AuthorizedExportHistory = withAuthorization(ExportHistory, ["ADMIN"]);


  return (
		<Routes>
			        <Route path="/" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			
    	</Routes>

		



        {/* <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      
      
        <Route path='' element={<PrivateRoute/>}>
            <Route element={<PageLayout />}>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/inventory' element={<Inventory/>} />
              <Route path='/supplier' element={<Supplier/>} />
              <Route path='/product' element={<Product/>} />
              <Route path='/order' element={<Order/>} />
            
              <Route path="/warning" element={<Warning />} />
                <Route path='/export' element={<AuthorizedExport />} />
              <Route path='/export-history' element={<AuthorizedExportHistory />} />
            </Route>
        </Route>
    </Routes> */}
  );
}

export default App;
