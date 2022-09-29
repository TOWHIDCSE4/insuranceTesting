import styled from 'styled-components';
import { TimePicker as TimePickerAntd, Button as ButtonAntd } from 'antd';

export const WrapContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxTimePicker = styled.div`
  display: flex;
  height: 40px;
  width: 218px;
  border-radius: 5px;
  padding: 0 14px;
  flex-direction: row;
  align-items: center;
  background-color: #f8f8f8;

  &:focus {
    border-color: #30a867;
    box-shadow: 0 0 0 2px rgba(48 168 103 / 20%);
  }

  align-items: center;
`;

export const TimePicker = styled(TimePickerAntd)`
  & .ant-picker-input > input {
    &::placeholder {
      font-weight: normal;
      color: #000 !important;
      opacity: 1 !important;
    }

    &:-ms-input-placeholder {
      color: #000 !important;
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: #000 !important;
    }
  }
`;

export const Space = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export const DropDownBtn = styled(ButtonAntd)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  &:hover,
  &:focus {
    border: none;
    background-color: unset;
  }
`;

export const BoxClock = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapMinutes = styled.div`
  display: flex;
  width: 173px;
  height: 40px;
  padding: 13px;
  background-color: #f8f8f8;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & span {
    margin-right: 5px;
  }
`;

export const WrapMinutesLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WrapMinutesRight = styled.div`
  display: flex;
  width: 57px;
  height: 23px;
  background: #ffffff;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
