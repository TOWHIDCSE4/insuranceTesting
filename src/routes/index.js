import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import { getMe } from '../slices/auth';
import { routes } from './routes';
import useLoading from "../hooks/useLoading";

const Router = () => {
  useLoading();
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) return;
    dispatch(getMe());
  }, [isAuth]);

  const routing = useRoutes(routes());
  return routing;
};

export default Router;
