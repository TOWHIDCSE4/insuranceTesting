import { Button as AntDButton } from "antd";
import styled, { css } from "styled-components";

export const WrapHeader = styled.div`
  border-bottom: 1px solid #e6e6e6;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

export const WrapSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 3;
  height: 100%;
  border-right: 1px solid #e6e6e6;
  span.input-item-search {
    max-width: 430px;
  }
`;

export const WrapAction = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 2;
`;

export const WrapIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #e6e6e6;
  img {
    cursor: pointer;
  }

  ${({ $isDelete }) =>
    $isDelete &&
    css`
      padding: 0 20px;
    `};

  ${({ $isCall }) =>
    $isCall &&
    css`
      padding: 0 10px;
    `};
`;

export const WrapButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-left: 20px;
`;

export const Button = styled(AntDButton)`
  background: linear-gradient(180deg, #36b872, #30a867);
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  &:hover,
  &:focus {
    background: linear-gradient(180deg, #36b872, #30a867);
    color: #fff;
    border-color: #30a867;
  }
`;

export const WrapFilter = styled.div`
  padding: 10px 20px;
`;
