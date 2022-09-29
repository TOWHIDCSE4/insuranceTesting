import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Col, Checkbox, Button, Empty} from 'antd';
import {createData} from '../../../slices/customerCare';
import Table from '../../../components/common/TableNormal';
import IconPlus from '../../../assets/images/icons/plus.svg';
import _ from 'lodash';
import Filter from "../../../components/common/Filter";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const dataSource = [
  {
    key: 1,
    date: '12/04/2022',
    info: 'Thông tin thu nhập',
    content: '10 Downing Street',
  },
  {
    key: 2,
    date: '12/04/2022',
    info: 'Thông tin thu nhập',
    content: '10 Downing Street',
  },
  {
    key: 3,
    date: '12/04/2022',
    info: 'Thông tin thu nhập',
    content: '10 Downing Street',
  },
  {
    key: 4,
    date: '12/04/2022',
    info: 'Thông tin thu nhập',
    content: '10 Downing Street',
  },
]

const options = [
  { label: 'Chưa gọi điện', value: 'Apple' },
  { label: 'Chưa gọi điện', value: 'Pear' },
  { label: 'Chưa gọi điện', value: 'Orange' },
  { label: 'Chưa gọi điện', value: 'Orange' },
  { label: 'Chưa gọi điện', value: 'Orange' },
  { label: 'Đã khảo sát, chờ lịch tư vấn tài chính', value: 'Orange' },
];

export default function SpendingForm() {
  const {t} = useTranslation();
  const customerCare = useSelector((state) => state.customerCare);
  const [dataTable, setDataTable] = useState(dataSource);
  const dispatch = useDispatch();

  const columns = [
    {
      title: t('common.date'),
      dataIndex: 'date',
      key: 'stt',
    },
    {
      title: t('common.type info'),
      dataIndex: 'info',
      key: 'date',
    },
    {
      title: t('common.content'),
      dataIndex: 'content',
      key: 'content',
    }
  ];

  const initFetch = useCallback(() => {
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    //re render
  }, [customerCare]);

  const addRow = () => {
    const rowData = {
      key: 0,
      name: '',
      age: 42,
      address: '10 Downing Street',
    }

    let lastValue = _.last(dataTable);
    rowData.key = lastValue.key + 1;
    setDataTable([rowData, ...dataTable]);
  }

  const saveData = (e) => {
    dispatch(createData({
      id: 1,
      title: e.target.value,
    }));
  };

  const table = useMemo(() => {
    if (!!dataTable && dataTable.length > 0) {
      return <Table dataSource={dataTable} columnTable={columns} />
    } else {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
    }
  }, [dataTable])

  return (
    <Col span={4} className="finance-consultant__right">
      <div className="finance-consultant__right--top">

        <Checkbox className="checkbox-item">{t('customer care.no more potential')}</Checkbox>
      </div>
      <div className="finance-consultant__right--event">
        <div className="finance-consultant__right--event--left">
          <h5>{t('customer care.history title')}</h5>
          <Filter options={options} />
        </div>
        <Button type="primary" className="btn-primary" onClick={saveData}>{t('common.save')}</Button>
      </div>
      <div className="finance-consultant__right--list">
        {table}
        <Button className="btn-add-new" icon={<img src={IconPlus} alt=""/>} onClick={addRow}>{t('customer care.add event')}</Button>
      </div>
      <div className="finance-consultant__right--info">
        <h3>{t('customer care.sync info')}</h3>
        <ul>
          <li>27 tuổi, 1 vợ, 2 con, chưa có nhà, đang làm nghề môi giới chứng khóa</li>
          <li>Thu nhập 62 triệu</li>
        </ul>
      </div>
    </Col>
  );
}
