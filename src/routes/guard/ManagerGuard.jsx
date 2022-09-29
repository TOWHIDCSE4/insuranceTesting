import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ManagerGuard = ({ element }) => {
  const { isAuth, me } = useSelector((state) => state.auth);
  const { permissions } = me;
  const location = useLocation();

  console.log(location)

  if (!isAuth) {
    return <Navigate to='/auth' />;
  }

  if (!(permissions.includes('payment') || permissions.includes('qa') || permissions.includes('admin'))) {
    return <Navigate to="/" />;
  }

  if (!permissions.includes('payment') && location.pathname.includes('/admin/payment')) {
    if (permissions.includes('qa') ) {
      return <Navigate to="/admin/q&a" />;
    }else{
      return <Navigate to="/admin" />;
    }
  }

  if (!permissions.includes('qa') && location.pathname.includes('/admin/q&a')) {
    if (permissions.includes('payment')) {
      return <Navigate to="/admin/payment" />;
    }else{
      return <Navigate to="/admin" />;
    }
  }

  if (!permissions.includes('admin') && location.pathname === '/admin') {
    if (permissions.includes('qa') ) {
      return <Navigate to="/admin/q&a" />;
    }else{
      return <Navigate to="/admin/payment" />;
    }
  }
  

  

  return element;
};

export default ManagerGuard;
