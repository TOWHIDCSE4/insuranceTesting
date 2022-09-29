import { Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import groupCall from '../../../../assets/images/icons/groupCall.svg';
import * as S from '../../styles';

export default function PotentialItemCall(props) {
  const { t } = useTranslation();
  const { record } = props;

  const handleCall = (value) => {
    console.log('Call,', value);
  };

  return (
    <Tooltip
      title={t('top-potential-customer.changeCall')}
      placement="topLeft"
      overlayInnerStyle={{ borderRadius: '15px', padding: '10px 15px' }}
    >
      <S.WrapTableAction>
        <img src={groupCall} alt="" onClick={() => handleCall(record.phone)} />
      </S.WrapTableAction>
    </Tooltip>
  );
}
