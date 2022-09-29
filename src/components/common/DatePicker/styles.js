import { DatePicker as AntDatePicker } from 'antd';
import styled from 'styled-components';

export const DatePicker = styled(AntDatePicker)`
  background-color: #f8f8f8 !important;
  border-radius: 5px;
  border: none;
  &:focus {
    border-color: #30a867;
    box-shadow: 0 0 0 2px rgba(48 168 103 / 20%);
  }
`;
