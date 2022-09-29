import React from 'react';
import {Input} from 'antd';
import SearchIcon from '../../../assets/images/icons/green-search.svg';

export default function InputSearch(props) {
  const {
    classStyle = 'input-item-search',
    setPayload
  } = props;

  const handleSearch = (e) => {
    setPayload(e.target.value);
  };

  return (
    <Input onPressEnter={handleSearch} className={classStyle} prefix={<img src={SearchIcon} alt="" />} />
  );
}
