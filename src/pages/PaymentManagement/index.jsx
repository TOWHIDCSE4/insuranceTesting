import { Col, notification, Row, Spin, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/common/Pagination';
// import Table from '../../components/common/TableNormal';
import { DeleteFilled, DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import ModalConfirm from '../../components/ModalConfirm';
import * as S from '../../components/styles';
import { getTimeByTZ } from '../../helper/index';
import {
  deletePayment,
  retrieveData,
  uploadFile
} from '../../slices/paymentManagement';
import { LOADING_STATUS } from '../../ultis/constant';
import CreatePayment from './CreatePayment';
import PaymentHistory from './PaymentHistory';
import PaymentManagementHeader from './PaymentManagementHeader';



const PaymentManagement = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [rowActive, setRowActive] = useState({});
  const [searchPayload, setSearchPayload] = useState('');
  const [historyItem, setHistoryItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const dispatch = useDispatch();
  const inputRef = useRef();

  const payments = useSelector((state) => state.paymentManagementReducer);
  const loading = useSelector((state) => state.loading.loading);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDeleteOne = (item) => {
    ModalConfirm({
      content: `Xác nhận xóa ${item.userFullname}`,
      callApi: () => {
        dispatch(deletePayment({ transactionIds: [item.id] })),
        setHistoryItem(null);
      },
    });
  };
  const handleDelete = () => {
    if (selectedRowKeys.length > 0) {
      ModalConfirm({
        callApi: () => {
          dispatch(deletePayment({ transactionIds: selectedRowKeys })),
          setHistoryItem(null);
        },
      });
    } else {
      notification.warning({
        message: 'Vui lòng chọn bản ghi bạn cần xóa',
        duration: 2,
        placement: 'topLeft',
        icon: false,
      });
    }
  };

  const handleImport = () => {
    inputRef.current.click();
    
    const input = inputRef.current;
    const handleFile= (e)=> {
      const file = e.target.files[0]
      if (file) {
        const data = new FormData();
        data.append('file', file);
        dispatch(uploadFile(data));
      }
    };

    input.addEventListener('change', handleFile);
    removeEventListener('change',handleFile)
  };

  const columns = [
    {
      title: 'Họ và tên',
      dataIndex: 'userFullname',
      key: 'userFullname',
    },
    {
      title: 'Ngày thanh toán',
      key: 'startDate',
      render: (record) => {
        return <span>{getTimeByTZ(record.startDate)}</span>;
      },
    },
    {
      title: 'Ngày hiệu lực',
      key: 'startDate',
      render: (record) => {
        return <span>{getTimeByTZ(record.startDate)}</span>;
      },
    },
    {
      title: 'Ngày kết thúc',
      key: 'dueDate',
      render: (record) => {
        return <span>{getTimeByTZ(record.dueDate)}</span>;
      },
    },
    {
      title: 'Số tiền',
      key: 'amount',
      className: 'green-color',
      render: (record) => {
        const format = new Intl.NumberFormat('vi-VN').format(record.amount);
        return <span>{format}</span>;
      },
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (_, record) => (
        <DeleteFilled 
          className='btn-deleteIcon'
          onClick={() => handleDeleteOne(record)}/>
      ),
    },
  ];


  const onChangePage = (e) => {
    setPage(e.offset);
    setLimit(e.limit);
  };

  useEffect(() => {
    const params = { q: searchPayload, page: page, limit: limit };
    dispatch(retrieveData(params));
  }, [searchPayload, page, limit, payments.isReload]);

  return (
    <div className='paymentManagement'>
      <input type='file' ref={inputRef} style={{ display: 'none' }} />
      <S.PageHeader
        className='site-page-header-responsive'
        backIcon={false}
        onBack={() => window.history.back()}
        title='Quản lý thanh toán khách hàng Manulife'
        extra={[
          <S.Button key='1' onClick={handleDelete}>
            Xóa
          </S.Button>,
          <S.Button
            key='3'
            type='primary'
            icon={<DownloadOutlined style={{ fontSize: '14px' }} />}
            onClick={handleImport}
          >
            Import
          </S.Button>,
          <S.Button
            key='4'
            type='primary'
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Thanh toán mới
          </S.Button>,
        ]}
      ></S.PageHeader>

      <div className='paymentManagement-container'>
        <Row
          gutter={[15, 15]}
          align='stretch'
          className='paymentManagement-row'
        >
          <Col
            span={15}
            className='paymentManagement-col'
            lg={15}
            md={24}
            sm={24}
            xs={24}
          >
            <div className='paymentManagement-content'>
              <PaymentManagementHeader
                title='Danh sách tài khoản'
                search
                setPayload={setSearchPayload}
              />
              <Spin spinning={loading === LOADING_STATUS.pending}>
                <Table
                  className='table-common paymentManagement-table'
                  dataSource={payments.data}
                  columns={columns}
                  pagination={false}
                  rowSelection={{
                    selectedRowKeys,
                    onChange: onSelectChange,
                  }}
                  rowClassName={(record) =>
                    rowActive === record.id ? 'active' : ''
                  }
                  onRow={(record) => {
                    return {
                      onClick: () => {
                        setRowActive(record.id), setHistoryItem(record);
                      },
                    };
                  }}
                  rowKey='id'
                  size='middle'
                  bordered={false}
                />
                <Pagination total={payments.total} setPaginate={onChangePage} />
              </Spin>
            </div>
          </Col>
          <Col
            span={9}
            className='paymentManagement-col'
            lg={9}
            md={24}
            sm={24}
            xs={24}
          >
            <div className='paymentManagement-content'>
              <PaymentManagementHeader title='Lịch sử thanh toán' />
              <PaymentHistory customer={historyItem} />
            </div>
          </Col>
        </Row>
        <CreatePayment
          users={payments.data}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      {/* <Table
        dataSource={payments.data}
        columnTable={columns}
        isSelection
        setSelectedRowKeys={onSelectChange}
      ></Table> */}
    </div>
  );
};

export default PaymentManagement;
