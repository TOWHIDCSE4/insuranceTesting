import React, { Fragment, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header';

export const PublicLayout = () => {
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to='/auth' />;
  }

  return (
    <Fragment>
      <Header />
      <div className='main-wrapper'>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Fragment>
  );
};

export default PublicLayout;
