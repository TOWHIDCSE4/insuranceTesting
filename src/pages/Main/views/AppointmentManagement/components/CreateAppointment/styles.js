import styled from 'styled-components';
import { Button as ButtonAntd, Row as RowAntd } from 'antd';
import { Select, Input, DatePicker } from '../../../../../../components/common';

export const WrapInput = styled(Input)`
  height: 40px;
`;

export const WrapSelect = styled(Select)`
  height: 40px;
`;

export const WrapDatePicker = styled(DatePicker)`
  height: 40px;
  background-color: #f8f8f8 !important;
  & .ant-picker-input {
    display: flex;
    flex-direction: row-reverse;

    & .ant-picker-suffix {
      margin-right: 14px;
    }
  }
`;

export const ButtonAdd = styled(ButtonAntd)`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #27c456;
  border-radius: 50%;
  border: none;

  &:hover,
  &:focus {
    background-color: #27c456;
  }
`;

export const WrapTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  &::before {
    content: '*';
    color: #ff5855;
    font-weight: 600;
    font-size: 16px;
    margin-right: 4px;
  }
`;

export const WrapRow = styled(RowAntd)`
  margin-bottom: 10px;
`;

export const WrapTitleUser = styled.span`
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;
