import React from 'react';
import moment from 'moment';
import { statusAppointment } from '../../../../../../ultis/statusAppointment';

//COMPONENT
import {
  Company,
  UserCircle,
  Users,
} from '../../../../../../assets/images/icons/components';

// STYLES
import * as S from './styles';

export const DayEvent = ({ event }, eventActive) => {
  const startDate = new Date(event.start);
  const endDate = new Date(event.end);
  const nowDate = new Date();
  const diffTime = endDate - startDate;
  const start = moment(event.start).format('LT');
  const startSchedular = moment.duration(diffTime, 'milliseconds').asMinutes();
  const isEventActive = event.apptId === eventActive.apptId;
  const stausColor = statusAppointment(
    startDate,
    endDate,
    nowDate,
    event.isCompleted,
    isEventActive
  );
  return (
    <S.WrapContainer
      backgroundColor={stausColor.backgroundColor}
      color={stausColor.color}
    >
      <S.Content>
        {/* COMPANY */}
        {event.typeId === 3 ? (
          <S.BoxTitle>
            <Company width={15} height={13} color={stausColor.color} />
            <S.Name>DN - {event.customerApptRecords.length}</S.Name>
            <Users color={stausColor.color} />
          </S.BoxTitle>
        ) : (
          <S.BoxTitle>
            <UserCircle color={stausColor.color} />
            <S.Name>Cá nhân</S.Name>
          </S.BoxTitle>
        )}
        <S.Text color={stausColor.color}>{event.title}</S.Text>
        <S.Description check={startDate < nowDate && nowDate < endDate}>
          {event.description}
        </S.Description>
      </S.Content>

      <S.Text
        color={stausColor.color}
      >{`${start} (${startSchedular}p)`}</S.Text>
    </S.WrapContainer>
  );
};

export default DayEvent;
