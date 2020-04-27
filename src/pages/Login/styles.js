import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 50px;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 25%;
  width: 60%;
`;

export const Text = styled.Text`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const Input = styled.TextInput.attrs(({ security }) => ({
  secureTextEntry: security,
}))`
  width: 100%;
  height: 50px;
  background: white;
  margin-bottom: 20px;
  border-radius: 8px;
  padding-left: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: red;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
