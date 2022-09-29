import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import GroupButton from '../GroupButton';
import DetailAppointment from '../DetailAppointment';

// STYLES
import * as S from './styles';

export const InformationAppointment = ({ info }) => {
  return (
    <S.WrapContainer>
      {Object.keys(info).length > 0 ? (
        <>
          <GroupButton />
          <DetailAppointment info={info} />
        </>
      ) : (
        <S.Empty>
          Không có cuộc hẹn nào gần đây. Thêm cuộc hẹn để kết nối đến khách hàng
          tốt hơn.
        </S.Empty>
      )}
    </S.WrapContainer>
  );
};

InformationAppointment.prototype = {
  info: PropTypes.object,
};

export default InformationAppointment;
