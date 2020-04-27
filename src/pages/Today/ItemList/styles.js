import styled from 'styled-components/native';

export const ContainerItem = styled.TouchableOpacity`
  background-color: white;
  width: 95%;
  margin: 10px;
  padding: 10px;
  height: 70px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTexts = styled.View``;

export const Text = styled.Text`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;
