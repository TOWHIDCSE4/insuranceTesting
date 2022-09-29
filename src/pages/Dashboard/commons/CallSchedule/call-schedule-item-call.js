import { Checkbox, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import call from '../../../../assets/images/icons/callDashboard.svg';
import * as S from '../../styles';

export default function CallScheduleItemCall(props) {
  const { t } = useTranslation();
  const { record } = props;

  const handleCall = (value) => {
    console.log('Call,', value);
  };

  return (
    <Tooltip
      title={t('call-schedule.call')}
      placement="topLeft"
      overlayInnerStyle={{ borderRadius: '15px', padding: '10px 15px' }}
    >
      <S.WrapTableAction>
        <img src={call} alt="call" onClick={() => handleCall(record.phone)} />
        <Checkbox className="checkbox-item" />
      </S.WrapTableAction>
    </Tooltip>
  );
}
