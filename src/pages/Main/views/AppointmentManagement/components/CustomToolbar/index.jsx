import React, { useState } from 'react';
import moment from 'moment';
import { getMonday, getSunday } from '../../../../../../ultis/date';

// STYLES
import * as S from './styles';

//IMAGE
import LeftArrow from '../../../../../../assets/images/icons/left-arrow-min.svg';
import RightArrow from '../../../../../../assets/images/icons/right-arrow-min.svg';
import { Calender } from '../../../../../../assets/images/icons/components';
import Plus from '../../../../../../assets/images/icons/plus.svg';
import CreateAppointment from '../CreateAppointment';

function CalendarToolbar(props) {
  const { date, onNavigate } = props;
  const [open, setOpen] = useState(false);
  const sunDay = getMonday(new Date(date));
  const monDay = getSunday(new Date(date));

  const goToBack = () => {
    onNavigate('PREV');
  };
  const goToNext = () => {
    onNavigate('NEXT');
  };

  const handleCreate = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <S.WrapContainer>
        <S.WrapLeft>
          <S.ActionLeftTile className='rbc-year'>{`Tháng ${moment(date).format(
            'MM'
          )}`}</S.ActionLeftTile>

          <S.WrapAction>
            <S.Action onClick={goToBack}>
              <img src={LeftArrow} />
            </S.Action>

            <S.Action onClick={goToNext}>
              <img src={RightArrow} />
            </S.Action>
          </S.WrapAction>

          <S.WrapActionCaledar>
            <S.Action onClick={goToBack}>
              <img src={LeftArrow} />
            </S.Action>

            <S.ContentCaledar>
              <Calender />
              <S.TextDate>{`${sunDay} - ${monDay}`}</S.TextDate>
            </S.ContentCaledar>

            <S.Action onClick={goToNext}>
              <img src={RightArrow} />
            </S.Action>
          </S.WrapActionCaledar>
        </S.WrapLeft>

        <S.ButtonImport onClick={handleCreate} type='primary'>
          <img src={Plus} />
          <S.ButonText>Tạo mới</S.ButonText>
        </S.ButtonImport>
      </S.WrapContainer>
      <CreateAppointment open={open} handleCancel={handleCancel} />
    </>
  );
}

export default CalendarToolbar;
