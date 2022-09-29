import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const GuestGuard = ({ element }) => {
  const { isAuth, me } = useSelector((state) => state.auth);
  const { isAdmin, permissions } = me;

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  if (permissions.includes('payment')) {
    return <Navigate to="/admin/payment" />;
  } else if (permissions.includes('qa')) {
    return <Navigate to="/admin/q&a" />;
  } else if (permissions.includes('admin')) {
    return <Navigate to="/admin" />;
  }

  return element;
};

export default GuestGuard;
