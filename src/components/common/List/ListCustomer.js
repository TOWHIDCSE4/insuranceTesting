import React from 'react';
import {useTranslation} from "react-i18next";
import {calculateAge, getTimeByTZ} from '../../../helper'

export default function ListCustomer(props) {
  const {t} = useTranslation();
  const { data, selectId = null, setSelectId = null } = props;

  const selectItem = () => {
    if (!!setSelectId) {
      setSelectId(data?.customerId)
    }
  }
 
  return (
    <div className={`list-customer ${selectId === data.customerId ? 'list-customer-active' : ''}`} onClick={selectItem}>
      <div className="list-customer__content">
        <p className="list-customer__content-name">
          <span className="dot"></span>
          {data?.fullname}
        </p>
        <div className="list-customer__content-gender">
          <p className="list-customer__content-gender--left"><span className="before">{t('common.gender')}</span>{data?.gender === 1 ? "Nam" : "Nữ"}</p>
          <p className="list-customer__content-gender--right"><span className="before">{t('common.old')}</span> {calculateAge(data?.dob)}</p>
        </div>
        {
          !!data.contracts[0] && <><p className={`${selectId === data.customerId ? 'color-green' : ''} list-customer__content-contract`}>
            <span className="before">{t('common.contract')}</span>{data.contracts[0]?.contractNumber}
          </p>
          <p className="list-customer__content-date">
            <span className="before">{t('common.sign date')}</span>{getTimeByTZ(data.contracts[0]?.startDate)}
          </p></>
        }
      </div>
    </div>
  );
}
