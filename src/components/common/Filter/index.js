import React, {Button, Checkbox, Row, Col, Popover} from 'antd';
import {useTranslation} from 'react-i18next';
import {useMemo, useState} from 'react';
import FilterIcon from '../../../assets/images/icons/filter.svg';
import * as S from "./styles";

export default function Filter(props) {
  const {t} = useTranslation();
  const {options, setPayload} = props;
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const checkFilter = (checkedValues) => {
    setPayload(checkedValues);
    setCount(checkedValues.length);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const checkboxRender = useMemo(() => {
    return (
      <Checkbox.Group style={{'maxWidth': '400px'}} onChange={checkFilter} className="checkbox-item">
        <Row>
          {
            options.map((val, index) => {
              return <Col key={index} span={24}>
                <Checkbox value={val?.value}>{val?.label}</Checkbox>
              </Col>
            })
          }
        </Row>
      </Checkbox.Group>
    )
  });

  return (
    <div className="filter">
      <Popover
        content={checkboxRender}
        trigger="click"
        placement="bottomLeft"
        onOpenChange={handleOpenChange}
      >
        <S.ButtonFilter active={open ? 1 : 0}>
          <S.Div>
            <S.Span>{count}</S.Span>
            {t('common.filter')}
          </S.Div>
          <img src={FilterIcon} alt=""/>
        </S.ButtonFilter>
      </Popover>
    </div>
  );
}
