import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  console.log("This is token from private:", token);
  return token ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivateRoute;
