import React, {useEffect, useState} from 'react';
import InputSearch from '../../components/common/InputSearch';
import Filter from '../../components/common/Filter';
import List from '../../components/common/List';
import {TYPE_LIST_CUSTOMERS, DEFAULT_SIZE, CUSTOMER_FILTER_OPTIONS} from '../../ultis/constant';
import {getCustomers} from '../../services/customers';
import Pagination from '../../components/common/Pagination';
import {getData, setCustomerData, resetCustomerData} from '../../slices/customerCare';
import {resetEvents} from '../../slices/events';
import {useDispatch} from "react-redux";

export default function ListSearch() {
  const [selectId, setSelectId] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [optionsFilter, setOptionsFilter] = useState('')
  const [listCustomer, setListCustomer] = useState([])
  const [total, setTotal] = useState([])
  const dispatch = useDispatch()
  const [paginate, setPaginate] = useState({
    limit: DEFAULT_SIZE,
    offset: 1
  });

  const getDataCustomer = async (payload) => {
    const {data} = await getCustomers(payload)
    if (data?.customers.length > 0) {
      setListCustomer(data?.customers)
      setSelectId(data?.customers[0].customerId)
    } else {
      dispatch(resetCustomerData())
      dispatch(resetEvents())
      setListCustomer([])
      setSelectId(0)
    }
    setTotal(data?.count)
  }

  useEffect(() => {
    if (selectId > 0) {
      const customerData = listCustomer.find((data) => data.customerId === selectId)
      
      dispatch(setCustomerData(customerData))
      dispatch(getData({customerId: customerData.customerId, info: []}))
    }
  }, [selectId])

  useEffect(() => {
    let offset = (paginate.offset - 1) * paginate.limit;
    getDataCustomer({...{search: keyword}, ...{offset: offset, limit: paginate.limit, status: optionsFilter}})
  }, [keyword, paginate, optionsFilter])

  return (
    <>
      <InputSearch setPayload={setKeyword} />
      <Filter options={CUSTOMER_FILTER_OPTIONS} setPayload={setOptionsFilter} />
      <List type={TYPE_LIST_CUSTOMERS} dataList={listCustomer} selectId={selectId} setSelectId={setSelectId} />
      <Pagination total={total} showSizeChanger={false} setPaginate={setPaginate} />
    </>
  );
}