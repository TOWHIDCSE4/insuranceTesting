import React, { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';



export const AdminLayout = () => {
  return (
    <Fragment> 
      <Header />
      {/* <Nav /> */}
      <div className='main-wrapper'>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Fragment>
  );
};

export default AdminLayout;
