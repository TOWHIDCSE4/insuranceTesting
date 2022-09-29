import { Button as AntButton, PageHeader as AntPageHeader, Upload as AntUpload, Select as AntSelect ,Input as AntInput } from 'antd';
import styled from 'styled-components';

export const PageHeader = styled(AntPageHeader)`
  &.ant-page-header {
    background-color: #fff; 
    padding: 7px 28px;
    margin:0px -30px 13px -30px;
    & .ant-page-header-heading-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
    }
  }
`;

export const Button = styled(AntButton)`
  font-family: 'Quicksand';
  font-style: normal;
  border-radius: 10px;
  height: 35px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  padding: 0 24px;
  &.ant-btn-primary {
    background: linear-gradient(180deg, #36B872 0%, #30A867 100%);
    color: #fff;
    border: none;
    &:hover,
    &:focus {
      opacity: 0.8
    }
    
  }
  &.ant-btn-dangerous {
    color: #ff5855 !important;
    border: 1px solid #ff5855 !important;
    &:hover,
    &:focus {
      opacity: 0.8;
      background: #fff  !important;
    }
    
  }
  &.ant-btn-default {
    border: 1px solid #3DBD78;
    color: #3DBD78;
    &:hover,
    &:focus {
      color: #40a9ff;
      border-color: #40a9ff;
    }
    &.btn-danger {
      border: 1px solid #ff5855;
      color: #ff5855;
      &:hover,
      &:focus {
        color: #40a9ff;
        border-color: #40a9ff;
      }
    }
  }
  &.ant-btn-icon-only {
    border: none;
    color: #999999;
    padding: 0;
    font-size: 20px;
    & svg{
      width:20px;
      height:20px;
    }
    .anticon {
      font-size: 20px;
    }
    &.btn-hover-danger {
      &:hover ,
      &:focus {
        background: none;
        color: #FF5855;
      }
    }
    &.btn-hover-primary {
      &:hover ,
      &:focus {
        background: none;
        color: #30a867;
      }
    }
  }
  &.ant-btn-sm {
    height: 25px;
    padding: 0 10px;
  }
`;

export const ButtonAdd = styled(AntButton)`
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: #3dbd78;
  display: flex;
  align-items: center;
  gap: 11px;
  font-weight: 700;
  font-size: 14px;
  &:hover,
  &:focus {
    opacity: 0.8;
    color: #3dbd78;
    background-color: transparent;
  }

  img {
    background: #3dbd78;
    padding: 4px;
    border-radius: 50%;
  }
`;

export const Upload = styled(AntUpload)`
  &.ant-upload-picture-card-wrapper {
    .ant-upload-select {
      &.ant-upload-select-picture-card {
        border-radius: 10px;
      }
    }
    .ant-upload-list-picture-card-container .ant-upload-list-item {
      border-radius: 10px;
    }
  }
`;

export const Select = styled(AntSelect)`
  &.ant-select .ant-select-selector {
    background: #F8F8F8;
    border-radius: 5px;
  }
`;

export const Input = styled(AntInput)`
  &.ant-input {
    background: #F8F8F8;
    border-radius: 5px;
    border: unset;
    &.ant-input-lg {
      border-radius: 10px;
      font-size: 14px;
    }
    &.ant-input-sm {
      border-radius: 3px;
    }
  }
   
`;


