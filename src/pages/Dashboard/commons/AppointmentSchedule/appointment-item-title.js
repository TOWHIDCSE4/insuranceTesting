import { Col, Row, Slider } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Filter from '../../../../components/common/Filter';
import { options } from '../../constants';
import * as S from '../../styles';

export default function AppointmentItemTitle(props) {
  const { t } = useTranslation();
  const [payload, setPayload] = useState('');

  return (
    <S.WrapTitle $noneIcon $toggle>
      <Col>
        <S.Title $nonePadding>{t('dashboard-page.appointment-schedule')}</S.Title>
      </Col>
      <Col flex="auto">
        <Row>
          <S.WrapTextCenter span={24}>Hoàn thành 12/64</S.WrapTextCenter>
          <Col span={24}>
            <Slider defaultValue={30} />
          </Col>
        </Row>
      </Col>
      <Col>
        <Filter options={options} setPayload={setPayload}></Filter>
      </Col>
    </S.WrapTitle>
  );
}
