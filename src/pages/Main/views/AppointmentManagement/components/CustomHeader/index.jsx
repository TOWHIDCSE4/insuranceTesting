import React from 'react';
import { convertDay } from '../../../../../../ultis/date';

// STYLES
import * as S from './styles';

export const CustomHeader = ({ date, localizer, culture }) => {
  const today = new Date();
  const dateItem = new Date(date);
  const day = convertDay(date.getDay());
  const compareDate = today.getDate() == dateItem.getDate();
  return (
    <S.WrapContainer>
      <S.TitleDay>{day}</S.TitleDay>
      <S.TextDay toDay={compareDate ? true : false}>
        {localizer.format(date, 'DD', culture)}
      </S.TextDay>
    </S.WrapContainer>
  );
};

export default CustomHeader;
