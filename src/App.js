import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// import locale from 'antd/lib/locale/vi_VN';
import locale from './locales/vi_VN';
import Router from './routes';
import store from './store';
import { setupInterceptor } from './services/axios';
import { VALIDATE_MESSAGES } from './ultis/constant';

// const customizeRenderEmpty = () => (
//   <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Không có dữ liệu'}/>
// );

setupInterceptor(store);
function App() {
  return (
    <ConfigProvider
      locale={locale}
      autoInsertSpaceInButton={false}
      form={VALIDATE_MESSAGES}
      // renderEmpty={customizeRenderEmpty}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
