import React from 'react';
import {TYPE_LIST_NORMAL, TYPE_LIST_CUSTOMERS} from '../../../ultis/constant'
import ListCustomer from './ListCustomer'
import ListNormal from "./ListNormal";

export default function List(props) {
  const {
    type = TYPE_LIST_NORMAL,
    dataList,
    selectId,
    setSelectId
  } = props;

  const listItem = dataList.map((val, index) => {
    if (type === TYPE_LIST_CUSTOMERS) {
      return <ListCustomer data={val} key={index} selectId={selectId} setSelectId={setSelectId}/>
    } else {
      return <ListNormal data={val} key={index} selectId={selectId} setSelectId={setSelectId}/>
    }
  });

  return <div className="list-item">{listItem}</div>;
}
