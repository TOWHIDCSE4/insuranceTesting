import React, { useState, useEffect, useRef } from 'react';
import { Checkbox, Image} from 'antd';
import Modal from '../../components/common/Modal'
import "../../assets/scss/Admin/stylesAdmin.scss"
import InputSearch from '../../components/common/InputSearch';
import CreateUser from './CreateUser';
import TableCommon from "../../components/common/TableNormal";
import Pagination from "../../components/common/Pagination";
import ModalConfirm from '../../components/ModalConfirm';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "../../components/styles";
import Icon, {DeleteFilled} from '@ant-design/icons';
import TrashSvg from '../../assets/images/icons/deleteIcon.svg';
import { PageHeader, Typography } from 'antd';
import {SettingOutlined, PlusOutlined, DownloadOutlined} from '@ant-design/icons';
import {
  searchUser,
  uploadFiles,
  updateUser,
  removeUser,
  removeUserIds,
  resetUserId,
} from '../../slices/userManagement';
import {DEFAULT_SIZE} from "../../ultis/constant";
import {useTranslation} from "react-i18next";

export default function UserManagement() {
  const {t} = useTranslation()
  const dispatch= useDispatch()
  const input_file = useRef(null);
  const {data, totalItem, refreshList}=useSelector((state)=>state.userManagement)
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isCreateUser, setIsCreateUser] = useState(false)
  const [isSettingLog, setIssettingLog] = useState(false)
  const [inputText, setInputText]= useState('')
  const [paginate, setPaginate] = useState({
    limit: DEFAULT_SIZE,
    offset: 1
  });
  
  const TrashIcon = (props) => <Icon component={TrashSvg} {...props} />;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: '90px',
      className: 'id-user',
      key: 1,
    },
    {
      title: 'Họ và tên',
      width: '180px',
      dataIndex: 'fullname',
      key: 2,
    },
    {
      title: 'Số điện thoại',
      width: '120px',
      dataIndex: 'phone',
      key: 3,
    },
    {
      title: 'Email',
      width: '215px',
      dataIndex: 'email',
      key: 4,
    },
    {
      width: '105px',
      title: 'ID login',
      dataIndex: 'loginId',
      className:'login-id',
      key: 5,
    },
    {
      title: 'Hỏi đáp',
      align: 'center',
      width: '79px',
      key: 6,
      className: 'checkbox_cell ',
      render: (record) => (
        <Checkbox
          id='qna'
          defaultChecked={record.permissions.includes('qa')}
          onChange={(e) => {handleCheckboxChange(e, record.id, 'qna'),console.log(record)}}
        />
      ),
    },
    {
      title: 'Thanh toán',
      width: '110px',
      align: 'center',
      key: 7,
      className: 'checkbox_cell',
      render: (record) => (
        <Checkbox
          id='isPaid'
          defaultChecked={record.permissions.includes('payment')}
          onChange={(e ) => handleCheckboxChange(e, record.id, 'isPaid')}
        />
      ),
    },
    {
      title: 'Admin',
      width: '70px',
      align: 'center',
      key: 8,
      className: 'checkbox_cell',
      render: (record) => (
        <Checkbox
          id='isAdmin'
          defaultChecked={record.permissions.includes('admin')}
          onChange={(e) => handleCheckboxChange(e, record.id, 'isAdmin')}
        />
      ),
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      width: '69px',
      align: 'center',
      key: 9,
      className: 'checkbox_cell',
      render: (record) => (
        <Checkbox
          id='idActive'
          defaultChecked={record.isActive}
          onChange={(e) => handleCheckboxChange(e, record.id, 'isActive')}
          disabled
          className='checkbox-disable'
        />
      ),
    },
    {
      title: '',
      dataIndex: '',
      width: '50px',
      key: 10,
      align: 'right',
      render: (record) => (
        // <button
        //   className='btn_reset-user btn-bgWhite-textGreen-borGreen'
        //   onClick={() => handelResetUser(record.id)}
        // >
        //   Khởi tạo lại
        // </button>
        <div>
          <S.Button
            size={'small'}
            onClick={() => handleDeleteUser(record)}
          >
            Khởi tạo lại
          </S.Button>
          <S.Button
            className='btn-hover-danger'
            icon={<DeleteFilled />}
            onClick={() => handleDeleteUser(record)}
          />
        </div>
      ),
    },
    // {
    //   title: '',
    //   width: '30px',
    //   align: 'center',
    //   key: 11,
    //   // render: (record) => (
    //   //   <img
    //   //     className='dustbin_icon'
    //   //     src='./images/dustbin_icon.svg'
    //   //     onClick={() => handleDeleteUser(record)}
    //   //   />
    //   // ),
    //   render: (record) => (
    //     <S.Button
    //       className='btn-hover-danger'
    //       icon={<DeleteFilled />}
    //       onClick={() => handleDeleteUser(record)}
    //     />
    //   ),
    // }
  ];

  const handleDeleteUser = (record) => {
    ModalConfirm({
      title: 'Xác nhận',
      content: `Bạn thực sự muốn xoá tài khoản ${record.loginId}`,
      callApi: () => dispatch(removeUser(record.id)),
    });
  };

  const handleCheckboxChange = (e, id, key) => {
    dispatch(updateUser({id: id, data: {[key]: e.target.checked}}));
  };

  const handelResetUser = (id) => {
    ModalConfirm({
      title: 'Xác nhận',
      content: `Khởi tạo lại sẽ xóa toàn bộ thông tin liên quan đến khách hàng và những việc đã làm với khách hàng.
      Thông tin về tài khoản sẽ  vẫn được giữ lại.`,
      callApi: () => dispatch(resetUserId({ userIds: [id] })),
    });
  };

  const handelResetUsers = () => {
    const listId = selectedRowKeys.map((item) => {
      return item.id
    });

    if (listId.length != 0) {
      ModalConfirm({
        title: 'Xác nhận',
        content: `Khởi tạo lại sẽ xóa toàn bộ thông tin liên quan đến khách hàng và những việc đã làm với khách hàng.
        Thông tin về tài khoản sẽ  vẫn được giữ lại.`,
        callApi: () => dispatch(resetUserId({ userIds: listId })),
      });
    }
  };

  const handleImport = () => {
    input_file.current.click()
    const inputElement = input_file.current
    inputElement.addEventListener("change", handleFiles);

    function handleFiles() {
      const fileList = this.files;
      if (fileList) {
        const formData = new FormData();
        formData.append('file', fileList[0])
        console.log(formData);
        dispatch(uploadFiles(formData))
        // ModalConfirm({title:'Xác nhận',content:`Upload file: ${fileList[0].name}?`,callApi:()=>uploadFiles(formData)})
      }
    }
    removeEventListener('change', handleFiles)
  }

  const handleDeleteUsers = () => {
    const listId = selectedRowKeys.map((item) => {
      return item.id
    });

    if (listId.length > 0) {
      ModalConfirm({
        title: 'Xác nhận',
        content: `Bạn thức sự muốn xoá ${listId.length} tài khoản không?`,
        callApi: () => dispatch(removeUserIds({ userIds: listId })),
      });
    }
  };

  useEffect(() => {
    input_file.current.style.display = 'none'
    dispatch(searchUser({ q: inputText, page: paginate.offset, limit: paginate.limit }));
  },[inputText, paginate])

  useEffect(()=>{
    if(refreshList){
      dispatch(searchUser({ q: inputText, page: paginate.offset, limit: paginate.limit }));
    }
  },[refreshList])

  return (
    <>
      <input type='file' ref={input_file} />
      <S.PageHeader
        className="site-page-header-responsive"
        backIcon={false}
        onBack={() => window.history.back()}
        title="Admin quản lý khách hàng Manulife"
        extra={[
          <S.Button key="1" onClick={handleDeleteUsers}>Xóa</S.Button>,
          <S.Button key="2" onClick={handelResetUsers}>Khởi tạo lại</S.Button>,
          <S.Button key="3" onClick={handleImport} type="primary" icon={<DownloadOutlined style={{ fontSize: '14px' }}/>}>
            Import
          </S.Button>,
          <S.Button key="4" onClick={() => setIsCreateUser(true)} type="primary" icon={<PlusOutlined />}>
            Tạo mới
          </S.Button>,
          <S.Button key="5" onClick={() => setIssettingLog(!isSettingLog)} className='btn-hover-primary' icon={<SettingOutlined key="6" style={{ fontSize: '20px' }}/>}></S.Button>
           
        ]}
      >
      </S.PageHeader>
      
      <div className='content-box container_admin'>
        <div className='admin_title'>
          <h3>Danh sách tài khoản</h3>
          <div className='search_box'>
            <InputSearch setPayload={setInputText} />
          </div>
        </div>
        <TableCommon dataSource={data} columnTable={columns} isSelection={true} setSelectedRowKeys={setSelectedRowKeys} />
        <Pagination total={totalItem} pageSize={paginate.limit} setPaginate={setPaginate}/>
        <Modal isVisible={isCreateUser} setIsVisible={setIsCreateUser} title="Tạo mới nhân sự" width={589} content={ <CreateUser closeCreateUser={setIsCreateUser}/>} />
      </div>
    </>
  );
}
