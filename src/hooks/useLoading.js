import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {message} from 'antd';
import {LOADING_STATUS} from '../ultis/constant';

function useLoading() {
  const loading = useSelector((state) => state.loading.loading);
  const mess = useSelector((state) => state.loading.message);

  useEffect(() => {
    if (loading === LOADING_STATUS.failed && !!mess) {
      message.error(mess)
    }
    
    if (loading === LOADING_STATUS.succeeded && !!mess) {
      message.success(mess)
    }
  }, [loading])

  return loading
}

export default useLoading
