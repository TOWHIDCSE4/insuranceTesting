import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SignedContractCalendar from './commons/SignedContract/signed-contract-calendar';
import SignedContractPlot from './commons/SignedContract/signed-contract-plot';
import * as S from './styles';

export default function SignedContract() {
  const { t } = useTranslation();

  return (
    <S.WrapContainer>
      <S.WrapTitle $noneIcon $toggle>
        <S.Title>{t('dashboard-page.signed-contract')}</S.Title>
      </S.WrapTitle>
      <S.WrapContent $padding="20px">
        <Row gutter={[0, 30]}>
          <Col span={24}>
            <SignedContractCalendar />
          </Col>
          <Col span={24}>
            <SignedContractPlot />
          </Col>
        </Row>
      </S.WrapContent>
    </S.WrapContainer>
  );
}
