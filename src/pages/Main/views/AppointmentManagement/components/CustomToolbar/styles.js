import styled from 'styled-components';
import { Button } from 'antd';
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
`;

export const ActionLeftTile = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

export const WrapAction = styled.div`
  display: flex;
  width: 60px;
  margin: 0 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Action = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-radius: 8px;
    background-color: #eff9f8;
    > img {
      filter: invert(57%) sepia(52%) saturate(461%) hue-rotate(95deg)
        brightness(97%) contrast(99%);
    }
  }
`;

export const WrapActionCaledar = styled.div`
  display: flex;
  padding: 0 4px;
  height: 35px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

export const ContentCaledar = styled.div`
  display: flex;
  margin: 0 12px;
  align-items: center;
`;

export const TextDate = styled.div`
  margin-left: 10px;
  font-weight: 600;
  font-size: 12px;
  color: #333333;
`;

export const ButtonImport = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1.4rem;
  border-radius: 10px;
  line-height: 1.4rem;
  height: 35px;
  cursor: pointer;
  padding: 0 26px;
  outline: 0;
  border: none;
  box-shadow: none;
  background: linear-gradient(180deg, #36b872 0%, #30a867 100%);
  color: #fff;

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #36b872 0%, #30a867 100%);
  }
`;

export const ButonText = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 12px;
`;
