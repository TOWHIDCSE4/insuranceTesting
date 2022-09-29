import { Row, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import noteCircle from '../../../../assets/images/icons/noteCircle.svg';
import * as S from '../../styles';

export default function PotentialItemTooltip(props) {
  const { t } = useTranslation();
  const { record } = props;

  return (
    <Row gutter={10}>
      <S.TextColor
        $color={
          record.potentialPoint.split('%')[0] >= 70
            ? '#3DBD78'
            : record.potentialPoint.split('%')[0] >= 50
            ? '#F6CF47'
            : '#FF5855'
        }
      >
        {record.potentialPoint}
      </S.TextColor>
      <S.WrapIconCenter>
        <Tooltip
          placement="bottomRight"
          color="#fff"
          overlayInnerStyle={{ borderRadius: '15px' }}
          title={
            <S.WrapTooltip>
              <p>
                <S.TextColor $color="#3DBD78">78%</S.TextColor> <S.TextColor $color="#333333">quỹ Dự phòng</S.TextColor>
              </p>
              <p>
                <S.TextColor $color="#F6CF47">50%</S.TextColor> <S.TextColor $color="#333333">quỹ Học vấn</S.TextColor>
              </p>
              <p>
                <S.TextColor $color="#FF5855">35%</S.TextColor> <S.TextColor $color="#333333">quỹ Hưu trí</S.TextColor>
              </p>
            </S.WrapTooltip>
          }
        >
          <S.IconTooltip src={noteCircle} />
        </Tooltip>
      </S.WrapIconCenter>
    </Row>
  );
}
