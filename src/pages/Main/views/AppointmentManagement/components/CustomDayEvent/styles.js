import styled from 'styled-components';

export const WrapContainer = styled.div`
  display: flex;
  height: 100%;
  border-radius: 10px;
  border: ${(props) => `1px solid ${props.color}`};
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
`;

export const Content = styled.span`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: left;
`;

export const BoxTitle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  margin: 0 5px;
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  color: #333333;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 13px;
  color: ${(props) => props.color};
`;

export const Description = styled.span`
  margin-top: 10px;
  font-weight: 600;
  font-size: 12px;
  color: ${(props) => (props.check ? '#fff' : '#333')};
`;
