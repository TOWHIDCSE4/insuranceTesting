import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AppointmentSchedule from './AppointmentSchedule';
import CallSchedule from './CallSchedule';
import CustomerCareDashBoard from './CustomerCareDashBoard';
import MissedAppointment from './MissedAppointment';
import RatioContract from './RatioContract';
import SignedContract from './SignedContract';
import TopPotentialCustomer from './TopPotentialCustomer';
import * as S from './styles';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <S.WrapLayout>
      <S.WrapHeader>
        <h3>{t('dashboard-page.title')}</h3>
      </S.WrapHeader>
      <Row gutter={[15, 15]}>
        <Col lg={16} md={24}>
          <Row gutter={[15, 15]}>
            <Col span={24}>
              <CallSchedule />
            </Col>
            <Col span={24}>
              <Row gutter={[15, 15]}>
                <Col lg={12} md={24}>
                  <CustomerCareDashBoard />
                </Col>
                <Col lg={12} md={24}>
                  <MissedAppointment />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <TopPotentialCustomer />
            </Col>
            <Col span={24}>
              <Row gutter={[15, 15]}>
                <Col lg={12} md={24}>
                  <SignedContract />
                </Col>
                <Col lg={12} md={24}>
                  <RatioContract />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={8} md={24}>
          <AppointmentSchedule />
        </Col>
      </Row>
    </S.WrapLayout>
  );
}
