import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: black;
  flex: 1;
  padding: 20px;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.color || 'white'};
  font-size: 16px;
  font-weight: bold;
`;

export const ContainerDate = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.TextInput.attrs({
  placeholder: 'Insira a tarefa',
  multiline: true,
  autocorrect: false,
  autocapitalize: false,
})`
  align-items: flex-start;
  padding: 10px;
  width: 100%;
  min-height: 150px;
  background-color: white;
  border-radius: 8px;
`;

export const ContainerItemDate = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 75%;
  height: 60px;
  background-color: red;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
