import { Navigate, Outlet } from 'react-router-dom';

const System = () => {
  const token = localStorage.getItem('token');
  console.log("This is token from private:", token);
  return token ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivateRoute;
