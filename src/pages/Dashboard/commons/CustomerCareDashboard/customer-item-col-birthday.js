import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../../styles';

export default function CustomerItemBirthday(props) {
  const { t } = useTranslation();
  const { record } = props;

  return (
    <Row gutter={[10, 0]}>
      <Col>
        <S.CircleTag />
      </Col>
      <Col>
        <Row>
          <p>{record.name}</p>
        </Row>
        <Row>
          <S.TextTable>
            {t('customer-care-dashboard.birthday')} {record.birthday}
          </S.TextTable>
        </Row>
      </Col>
    </Row>
  );
}
