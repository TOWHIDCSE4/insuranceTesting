import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PaginationCommon from '../../components/common/Pagination';
import CallScheduleItemCall from './commons/CallSchedule/call-schedule-item-call';
import * as S from './styles';
import { menuItems } from './constants';
import { randomColor } from './constants';

const dataSource = [
  {
    key: 1,
    name: 'Devon Lane',
    type: 'Cá nhân',
    phone: '0984 294 902',
    lastCall: '12/08/2022',
    afterCall: '17/08/2022',
    note: 'Đã làm khảo sát',
  },
  {
    key: 2,
    name: 'Cameron Williamson',
    type: 'Cá nhân',
    phone: '0293 893 920',
    lastCall: '02/08/2022',
    afterCall: '17/08/2022',
    note: 'Đã gọi 2 lần',
  },
  {
    key: 3,
    name: 'Jane Cooper',
    type: 'Doanh nghiệp',
    phone: '0392 439 344',
    lastCall: '12/08/2022',
    afterCall: '17/08/2022',
    note: 'Bỏ lỡ lịch tư vấn',
  },
  {
    key: 4,
    name: 'Courtney Henry',
    type: 'Doanh nghiệp',
    phone: '0238 939 893',
    lastCall: '04/08/2022',
    afterCall: '17/08/2022',
    note: 'Chưa gọi điện',
  },
  {
    key: 5,
    name: 'Guy Hawkins',
    type: 'Cá nhân',
    phone: '0293 929 199',
    lastCall: '11/08/2022',
    afterCall: '17/08/2022',
    note: 'Chưa gọi điện',
  },
];

export default function CallSchedule() {
  const { t } = useTranslation();
  const [dataTable, setDataTable] = useState(dataSource);
  const [toggle, setToggle] = useState(false);

  const useColor = [];

  const handleSelect = (value) => {
    console.log(`selected ${value}`);
  };

  const handleCall = (value) => {
    console.log(`Call ${value}`);
  };

  const randomNotDuplicate = () => {
    let color = Math.floor(Math.random() * 5);
    while (useColor.includes(color) && useColor.length < 5) {
      color = Math.floor(Math.random() * 5);
    }
    useColor.push(color);
    return color;
  };

  const columns = [
    {
      title: t('common.customer name'),
      dataIndex: 'name',
      key: 'name',
      render: (_, { name }) => <S.TagVertical $color={randomColor[randomNotDuplicate()]}>{name}</S.TagVertical>,
    },
    {
      title: t('common.customer type'),
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: t('common.phone'),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: t('common.last call'),
      dataIndex: 'lastCall',
      key: 'lastCall',
    },
    {
      title: t('common.after call'),
      dataIndex: 'afterCall',
      key: 'afterCall',
    },
    {
      title: t('common.note'),
      dataIndex: 'note',
      key: 'note',
    },
    {
      key: 'phone',
      render: (_, record) => <CallScheduleItemCall record={record} />,
    },
  ];

  return (
    <S.WrapContainer $toggle={toggle}>
      <S.WrapTitle $toggle={toggle}>
        <S.IconDown onClick={() => setToggle(!toggle)} />
        <S.Title>{t('dashboard-page.call-schedule')}</S.Title>
        <S.Select
          popupClassName="popup-select"
          defaultValue={menuItems[0]?.value}
          options={menuItems}
          onChange={handleSelect}
        />
      </S.WrapTitle>
      <S.WrapContent $display={!toggle ? 'block' : 'none'}>
        <S.Table
          dataSource={dataTable}
          columns={columns}
          pagination={false}
          bordered={false}
          scroll={{ scrollToFirstRowOnChange: false }}
        />
        <PaginationCommon total={50} showSizeChanger={false} setPaginate={{ limit: 10, offset: 0 }} />
      </S.WrapContent>
    </S.WrapContainer>
  );
}
