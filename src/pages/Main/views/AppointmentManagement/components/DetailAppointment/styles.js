import styled from 'styled-components';
import { Divider as DividerAntd } from 'antd';
import { Badge as BadgeAntd } from 'antd';
import { Button as ButtonAntd } from 'antd';

export const WrapContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

export const WrapInfo = styled.div`
  display: flex;
  margin-bottom: 14px;
  border-radius: 10px;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.07);
`;

export const WrapTop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 10px;
  border-bottom: 1px dashed #e6e6e6;
`;

export const BoxTitle = styled.span`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #333333;
`;

export const SubTitle = styled.span`
  margin: 0 20px 0;
  font-weight: 600;
  font-size: 12px;
`;

export const WrapTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const wrapMiddle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 13px 10px;
  border-bottom: 1px dashed #e6e6e6;
  justify-content: space-between;
`;

export const ItemMiddle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemMiddleContent = styled.div`
  display: flex;
  margin-left: 8px;
  flex-direction: column;
`;

export const ItemMiddleTitle = styled.span`
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;

export const ItemMiddleTextCalender = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #f6d047;
`;

export const Divider = styled(DividerAntd)`
  height: 32px;
`;

export const ItemMiddleText = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => (props.time ? '#3BBD77' : '#333333')};
`;

export const WrapBottom = styled.div`
  display: flex;
  padding: 15px 10px;
  flex-direction: row;
`;

export const WrapBottomTitle = styled.span`
  width: 65px;
  margin-left: 10px;
  margin-right: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #333333;
`;

export const WrapBottomText = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #333333;
`;

export const WrapParticipant = styled.div`
  display: flex;
  width: 100%;
  border-radius: 18px;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.07);
`;

export const WrapParticipantItem = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px dashed #ccc;
  padding: 5px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
`;

export const Badge = styled(BadgeAntd)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
`;

export const ButtonDelete = styled(ButtonAntd)`
  &:hover,
  &:focus {
    border: none;
    background-color: #fff;
  }
`;

export const Button = styled(ButtonAntd)`
  width: 80%;
  height: 35px;
  border: none;
  border-radius: 10px;
  margin: 15px auto 0px;
  padding: 0 10px;
  outline: 0;
  box-shadow: none;
  background: linear-gradient(180deg, #36b872 0%, #30a867 100%);
  color: #fff;
  font-weight: 700;
  font-size: 12px;

  &:hover,
  &:focus {
    color: #fff;
    background: linear-gradient(180deg, #36b872 0%, #30a867 100%);
  }
`;
