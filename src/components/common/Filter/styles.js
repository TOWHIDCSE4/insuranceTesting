import { Button as AntButton } from "antd";
import styled from "styled-components";

export const ButtonFilter = styled(AntButton)`
  background-color: #f8f8f8;
  height: 3rem;
  padding: 0 11px 0 7px;
  color: #333333 !important;
  border-radius: 10px;
  font-size: 1.2rem;
  width: 100%;
  min-width: 100px;
  text-align: left;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.active ? "1px solid #3dbd78" : "1px solid #d9d9d9"};
`;

export const Div = styled.div`
  margin-right: auto;
  column-gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Span = styled.span`
  width: 18px;
  height: 18px;
  background: #F6CF47;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  border-radius: 50%;
  text-align: center;
  padding-top: 1px;
`;