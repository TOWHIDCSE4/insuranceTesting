import React, {useEffect, useState} from 'react';
import {Col} from 'antd';
import InputSearch from '../../../components/common/InputSearch';
import Filter from '../../../components/common/Filter';
import List from '../../../components/common/List';
import {useDispatch} from "react-redux";

const dataSource = [
  {
    key: 1,
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: 2,
    name: 'John',
    age: 42,
    address: '10 Downing Street',
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


export default function Participant() {
  const [selectId, setSelectId] = useState(0);
  const [payload, setPayload] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
  }, [payload])

  useEffect(() => {
    // get id

  }, [selectId])

  return (
    <Col span={4} className="customer-care__left">
      <InputSearch setPayload={setPayload} />
      <List dataList={dataSource} selectId={selectId} setSelectId={setSelectId} />
    </Col>
  );
}
