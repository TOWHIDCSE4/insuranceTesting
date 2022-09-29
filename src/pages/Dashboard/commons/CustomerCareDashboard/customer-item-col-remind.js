import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../../styles';

export default function CustomerItemRemind(props) {
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
            {t('customer-care-dashboard.dueDate')} <S.TextTable $bold>{record.dueDate}</S.TextTable>
          </S.TextTable>
        </Row>
        <Row gutter={10}>
          <Col>
            <S.TextTable>
              {t('customer-care-dashboard.contractId')} <S.TextTable $bold>{record.contractId}</S.TextTable>
            </S.TextTable>
          </Col>
          <Col>
            <S.TextTable>
              {t('customer-care-dashboard.money')} <S.TextTable $bold>{record.money}</S.TextTable>
            </S.TextTable>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
