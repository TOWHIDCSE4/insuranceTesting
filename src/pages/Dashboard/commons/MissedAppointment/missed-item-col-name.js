import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../../styles';

export default function MissedItemName(props) {
  const { t } = useTranslation();
  const { record } = props;

  return (
    <Row gutter={[10, 0]}>
      <Col>
        <S.CircleTag $color="#ff5855" />
      </Col>
      <Col>
        <Row>
          <p>{record.name}</p>
        </Row>
        <Row>
          <S.TextTable>{t('missed-appointment.note')}</S.TextTable>
        </Row>
      </Col>
    </Row>
  );
}
