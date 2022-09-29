import React from 'react';
import { Pagination } from 'antd';
import { PAGE_SIZE_OPTIONS, DEFAULT_SIZE } from '../../../ultis/constant';

export default function PaginationCommon(props) {
  const {
    pageSizeOptions = PAGE_SIZE_OPTIONS,
    pageSize = DEFAULT_SIZE,
    total,
    showSizeChanger = true,
    setPaginate,
  } = props;

  const onChange = (page, pageSize) => {
    setPaginate({limit: pageSize, offset: page})
  }

  return (total > DEFAULT_SIZE && <Pagination onChange={onChange} onShowSizeChange={onChange} defaultPageSize={pageSize} total={total} pageSizeOptions={pageSizeOptions} showSizeChanger={showSizeChanger}/>)
}
