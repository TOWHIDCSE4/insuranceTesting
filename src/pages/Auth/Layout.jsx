import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />;
    </Suspense>
  );
};

export default AuthLayout;
