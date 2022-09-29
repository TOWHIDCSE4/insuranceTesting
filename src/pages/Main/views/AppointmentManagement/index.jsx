import React, { useState } from 'react';
import { Row, Col } from 'antd';

// STYLES
import * as S from './styles';

// COMPONENTS
import CalendarCustom from './components/CustomCalendar';
import InformationAppointment from './components/InformationAppointment';

const Appontment = () => {
  const [event, setEvent] = useState({});

  const handleEvent = (value) => {
    setEvent(value);
  };

  return (
    <S.WrapContainer>
      <S.WrapTitle>Quản lý lịch hẹn</S.WrapTitle>
      <Row gutter={8}>
        <Col span={14}>
          <CalendarCustom eventActive={event} handleEvent={handleEvent} />
        </Col>
        <Col span={10}>
          <InformationAppointment info={event} />
        </Col>
      </Row>
    </S.WrapContainer>
  );
};

export default Appontment;
