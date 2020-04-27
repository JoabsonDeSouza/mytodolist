import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: black;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const Logo = styled.Image`
  height: 30%;
  margin-bottom: 20px;
`;
