import styled from 'styled-components';
import { Select, Input, DatePicker } from '../../../../../../components/common';
import { Button as ButtonAntd, Row as RowAntd } from 'antd';

export const WrapInput = styled(Input)`
  height: 40px;
`;

export const WrapSelect = styled(Select)`
  & .ant-select-selector {
    display: flex;
    border-radius: 5px !important;
    height: 40px !important;
    align-items: center;
    & .ant-select-selection-item {
      font-weight: 700;
    }
  }
`;

export const WrapRow = styled(RowAntd)`
  margin-bottom: 10px;
`;

export const WrapDatePicker = styled(DatePicker)`
  height: 40px;
`;

export const ButtonAdd = styled(ButtonAntd)`
  display: flex;
  margin-top: 15px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #3dbd78;
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: #30a867;
  }
`;

export const ButtonDelete = styled(ButtonAntd)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: none;
`;
