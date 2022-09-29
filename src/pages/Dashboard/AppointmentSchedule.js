import React from 'react';
import { useTranslation } from 'react-i18next';
import AppointmentItemTitle from './commons/AppointmentSchedule/appointment-item-title';
import AppointmentListCard from './commons/AppointmentSchedule/appointment-list-card';
import * as S from './styles';

export default function AppointmentSchedule() {
  const { t } = useTranslation();

  return (
    <S.WrapContainer $height="768px">
      <AppointmentItemTitle />
      <S.WrapContent $padding="15px">
        <AppointmentListCard />
      </S.WrapContent>
    </S.WrapContainer>
  );
}
