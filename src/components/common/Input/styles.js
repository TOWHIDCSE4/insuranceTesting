import { Input as AntInput } from 'antd';
import styled from 'styled-components';

export const Input = styled(AntInput)`
  background: #f8f8f8;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #999999;
  &:focus {
    border-color: #30a867;
    box-shadow: 0 0 0 2px rgba(48 168 103 / 20%);
  }

  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
    background: #f8f8f8;
  }
`;
