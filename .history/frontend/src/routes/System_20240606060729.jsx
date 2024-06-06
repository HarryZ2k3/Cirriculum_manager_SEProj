import { Navigate, Outlet } from 'react-router-dom';

const System = () => {
  const token = localStorage.getItem('token');
  console.log("Welcome, you are inside the system", token);
  return token ? <Outlet/> : <Navigate to="/l" />;
};

export default System;
