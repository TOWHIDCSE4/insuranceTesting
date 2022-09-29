import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PaginationCommon from '../../components/common/Pagination';
import CustomerItemBirthday from './commons/CustomerCareDashboard/customer-item-col-birthday';
import CustomerItemRemind from './commons/CustomerCareDashboard/customer-item-col-remind';
import * as S from './styles';

const dataCustomerCare = [
  {
    key: 1,
    name: 'Devon Lane',
    birthday: '29/07/2022',
  },
  {
    key: 2,
    name: 'Cameron Williamson',
    birthday: '29/07/2022',
  },
  {
    key: 3,
    name: 'Jane Cooper',
    birthday: '29/07/2022',
  },
  {
    key: 4,
    name: 'Courtney Henry',
    birthday: '29/07/2022',
  },
  {
    key: 5,
    name: 'Guy Hawkins',
    birthday: '29/07/2022',
  },
];
const handleCSKH = (value) => {
  console.log('Value:', value);
};
const columnCustomerCare = [
  {
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <CustomerItemBirthday record={record} />,
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

const dataRemind = [
  {
    key: 1,
    name: 'Marvin McKinney',
    dueDate: '23/08/2022',
    contractId: '2121435',
    money: '20.000.000',
  },
  {
    key: 2,
    name: 'Marvin McKinney',
    dueDate: '23/08/2022',
    contractId: '2121435',
    money: '20.000.000',
  },
  {
    key: 3,
    name: 'Marvin McKinney',
    dueDate: '23/08/2022',
    contractId: '2121435',
    money: '20.000.000',
  },
  {
    key: 4,
    name: 'Marvin McKinney',
    dueDate: '23/08/2022',
    contractId: '2121435',
    money: '20.000.000',
  },
  {
    key: 5,
    name: 'Marvin McKinney',
    dueDate: '23/08/2022',
    contractId: '2121435',
    money: '20.000.000',
  },
];
const handleRemind = (value) => {
  console.log('Value:', value);
};
const columnsRemind = [
  {
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <CustomerItemRemind record={record} />,
  },
  {
    dataIndex: '',
    key: '',
    render: (record) => (
      <S.WrapButtonTable>
        <S.Button $type="ghost" onClick={() => handleRemind(record)}>
          Nhắc nộp phí
        </S.Button>
      </S.WrapButtonTable>
    ),
  },
];

export default function CustomerCareDashBoard() {
  const { t } = useTranslation();
  const [dataTable, setDataTable] = useState(dataCustomerCare);
  const [columns, setColumns] = useState(columnCustomerCare);
  const [toggle, setToggle] = useState(false);
  const [remind, setRemind] = useState(false);

  const handleSwitchMode = () => {
    setRemind(!remind);
    setDataTable(!remind ? dataRemind : dataCustomerCare);
    setColumns(!remind ? columnsRemind : columnCustomerCare);
  };

  return (
    <S.WrapContainer $toggle={toggle}>
      <S.WrapTitle $toggle={toggle}>
        <S.IconDown onClick={() => setToggle(!toggle)} />
        <S.Title>{t('dashboard-page.customer-care-dashboard')}</S.Title>
        <S.WrapButtonTitle flex="auto">
          <S.Button $type={!remind && 'disabled'} onClick={() => handleSwitchMode()}>
            {t('customer-care-dashboard.remind')}
          </S.Button>
        </S.WrapButtonTitle>
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
