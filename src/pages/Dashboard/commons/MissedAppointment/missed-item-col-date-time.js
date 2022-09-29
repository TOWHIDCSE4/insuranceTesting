import { Col, Row } from 'antd';
import React from 'react';
import alarm from '../../../../assets/images/icons/alarm.svg';
import * as S from '../../styles';

export default function MissedItemDateTime(props) {
  const { record } = props;

  return (
    <Row gutter={[10, 0]}>
      <Col>
        <S.WrapIconTable src={alarm} alt="alarm" />
      </Col>
      <Col>
        <Row>
          <p>{record.time}</p>
        </Row>
        <Row>
          <S.TextTable>{record.date}</S.TextTable>
        </Row>
      </Col>
    </Row>
  );
}
