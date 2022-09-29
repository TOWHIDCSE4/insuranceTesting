import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const AuthGuard = ({ element }) => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return element;
};

export default AuthGuard;
