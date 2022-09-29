import React from 'react';
import InputSearch from '../../components/common/InputSearch';

const PaymentManagementHeader = (props) => {
  const { title, search = false, setPayload } = props;

  return (
    <div className='paymentManagement-header'>
      <div className='paymentManagement-header_title'>
        <h3>{title}</h3>
      </div>
      {search && (
        <div className='paymentManagement-content_search'>
          <InputSearch setPayload={setPayload} />
        </div>
      )}
    </div>
  )
};

export default PaymentManagementHeader;
