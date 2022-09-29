import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PaginationCommon from '../../components/common/Pagination';
import MissedItemDateTime from './commons/MissedAppointment/missed-item-col-date-time';
import MissedItemName from './commons/MissedAppointment/missed-item-col-name';
import * as S from './styles';

const dataMissAppointment = [
  {
    key: 1,
    name: 'Jenny Wilson',
    note: 'Tư vấn hợp đồng',
    time: '08:15 - 08:30',
    date: '12/06/2022',
  },
  {
    key: 2,
    name: 'Jenny Wilson',
    note: 'Tư vấn hợp đồng',
    time: '08:15 - 08:30',
    date: '12/06/2022',
  },
  {
    key: 3,
    name: 'Jenny Wilson',
    note: 'Tư vấn hợp đồng',
    time: '08:15 - 08:30',
    date: '12/06/2022',
  },
  {
    key: 4,
    name: 'Jenny Wilson',
    note: 'Tư vấn hợp đồng',
    time: '08:15 - 08:30',
    date: '12/06/2022',
  },
  {
    key: 5,
    name: 'Jenny Wilson',
    note: 'Tư vấn hợp đồng',
    time: '08:15 - 08:30',
    date: '12/06/2022',
  },
];
const handleCSKH = (value) => {
  console.log('Value:', value);
};
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => <MissedItemName record={record} />,
  },
  {
    dataIndex: 'time',
    key: 'time',
    render: (_, record) => <MissedItemDateTime record={record} />,
  },
  {
    dataIndex: '',
    key: '',
    render: (record) => (
      <S.WrapButtonTable>
        <S.Button $type="ghost" onClick={() => handleCSKH(record)}>
          CSKH
        </S.Button>
      </S.WrapButtonTable>
    ),
  },
];

export default function MissedAppointment() {
  const { t } = useTranslation();
  const [dataTable, setDataTable] = useState(dataMissAppointment);
  const [toggle, setToggle] = useState(false);

  return (
    <S.WrapContainer $toggle={toggle} $maxHeight="442px">
      <S.WrapTitle $toggle={toggle}>
        <S.IconDown onClick={() => setToggle(!toggle)} />
        <S.Title>{t('dashboard-page.missed-appointment')}</S.Title>
      </S.WrapTitle>
      <S.WrapContent $display={!toggle ? 'block' : 'none'}>
        <S.Table
          dataSource={dataTable}
          columns={columns}
          pagination={false}
          bordered={false}
          scroll={{ scrollToFirstRowOnChange: false }}
          showHeader={false}
        />
        <PaginationCommon total={50} showSizeChanger={false} setPaginate={{ limit: 10, offset: 0 }} />
      </S.WrapContent>
    </S.WrapContainer>
  );
}
