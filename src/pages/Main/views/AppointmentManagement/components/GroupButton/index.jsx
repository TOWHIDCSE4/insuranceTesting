import React from 'react';

// COMPONENTS
import Edit from '../../../../../../assets/images/icons/components/Edit';
import Delete from '../../../../../../assets/images/icons/components/Delete';
// STYLES
import * as S from './styles';

export const GroupButton = () => {
  return (
    <S.WrapContainer>
      <S.WrapLeft>
        <S.Button type='primary'>Tư vấn</S.Button>
        <S.Button type='primary'>Khảo sát</S.Button>
        <S.Button type='primary'>Giải pháp</S.Button>
      </S.WrapLeft>
      <S.WrapRight>
        <S.ButtonIcon type='text' icon={<Edit />}></S.ButtonIcon>
        <S.ButtonIcon type='text' icon={<Delete />}></S.ButtonIcon>
      </S.WrapRight>
    </S.WrapContainer>
  );
};

export default GroupButton;
