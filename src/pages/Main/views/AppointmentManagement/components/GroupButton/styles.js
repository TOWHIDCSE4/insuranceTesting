import { Button as ButtonAntd } from 'antd';
import styled from 'styled-components';

export const WrapContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(ButtonAntd)`
  height: 35px;
  border: none;
  border-radius: 10px;
  margin-right: 5px;
  padding: 0 10spx;
  outline: 0;
  box-shadow: none;
  background: linear-gradient(180deg, #36b872 0%, #30a867 100%);
  color: #fff;
  font-weight: 700;
  font-size: 12px;

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #36b872 0%, #30a867 100%);
  }
`;

export const ButtonIcon = styled(ButtonAntd)`
  border: none;
  box-shadow: none;
  margin-left: 5px;
  padding: 10px;

  &:hover,
  &:focus {
    border: none;
    background-color: #fff;
  }
`;
