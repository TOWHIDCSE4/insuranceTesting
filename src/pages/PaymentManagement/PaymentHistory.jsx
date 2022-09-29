import { Empty, Table } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import calendarIcon from '../../assets/images/icons/calendar.svg';
import { getTimeByTZ } from '../../helper/index';

const columns = [
  {
    title: 'Ngày',
    dataIndex: 'date',
    key: 'date',
    width: '140px',
  },
  {
    title: 'Nội dung',
    dataIndex: 'content',
    key: 'content',
  },
];

const PaymentHistory = ({ customer }) => {
  const format = new Intl.NumberFormat('vi-VN').format(customer?.amount);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    const histories = [];
    histories.push({
      date: getTimeByTZ(customer?.dueDate),
      content: customer?.description,
    });
    setHistory(histories);
  }, [customer]);

  return (
    <div className='paymentHistory'>
      {customer ? (
        <>
          <div className='paymentHistory-customer'>
            <div className='paymentHistory-info'>
              <div className='paymentHistory-title'>
                <h4>{customer?.userFullname} </h4>
                <p>
                  Số tiền: <span>{format}</span>
                </p>
              </div>
              <div className='paymentHistory-time'>
                <div className='paymentHistory-time_item'>
                  <div className='paymentHistory-time_title'>
                    <img src={calendarIcon} alt='' />
                    <span>Ngày thanh toán</span>
                  </div>
                  <div className='paymentHistory-time_date'>
                    <span>{getTimeByTZ(customer?.startDate)}</span>
                  </div>
                </div>

                <div className='paymentHistory-time_item'>
                  <div className='paymentHistory-time_title'>
                    <img src={calendarIcon} alt='' />
                    <span>Ngày hiệu lực</span>
                  </div>
                  <div className='paymentHistory-time_date'>
                    <span>{getTimeByTZ(customer?.startDate)}</span>
                  </div>
                </div>

                <div className='paymentHistory-time_item'>
                  <div className='paymentHistory-time_title'>
                    <img src={calendarIcon} alt='' />
                    <span>Ngày kết thúc</span>
                  </div>
                  <div className='paymentHistory-time_date'>
                    <span>{getTimeByTZ(customer?.dueDate)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='paymentHistory-group'>
            <Table
              className='table-common'
              size='middle'
              dataSource={history}
              columns={columns}
              pagination={false}
              rowKey='date'
            />
          </div>
        </>
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        />
      )}
    </div>
  );
};

export default memo(PaymentHistory);
