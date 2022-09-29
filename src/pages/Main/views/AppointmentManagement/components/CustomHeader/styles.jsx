import styled from 'styled-components';

export const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleDay = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: #999999;
`;

export const TextDay = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 4px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.toDay ? '#fff' : '#333333')};
  background-color: ${(props) => (props.toDay ? '#36B972' : '#fff')};
`;
