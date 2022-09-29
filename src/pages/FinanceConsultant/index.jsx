import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row } from 'antd';
import Participant from './components/participant';
import ConsultantProcess from './components/consultantProcess';
import HistorySelect from './components/historySelect';
import SpendingForm from './form/spendingForm';

export default function FinanceConsultant() {
  const { t } = useTranslation();

  return (
    <div className='content-box finance-consultant'>
      <h3>{t('finance consultant.title')}</h3>
      <Row>
        <Participant />
        <div>
          <div>
            <div>
              <HistorySelect />
            </div>
            <div>
              <Button>Giải Pháp</Button>
              <Button>Đặt Lịch Hẹn</Button>
            </div>
          </div>
          {/* <SpendingForm /> */}
        </div>
        <ConsultantProcess />
      </Row>
    </div>
  );
}
