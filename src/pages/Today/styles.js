import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: black;
  flex: 1;
`;

export const ContainerChild = styled.View`
  flex: 1;
  margin: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-content: center;
  margin-bottom: 30px;
`;

export const ContainerTexts = styled.View`
  flex: 5;
`;

export const Text = styled.Text`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 80px;
  border-radius: 50px;
  flex: 1;
`;

export const ProgressBar = styled.View`
  background-color: white;
  width: 100%;
  height: 10px;
  flex-direction: row;
  align-content: center;
`;

export const Progress = styled.View`
  background-color: red;
  width: ${(props) => props.progress || 0};
  height: 10px;
`;

export const ContainerList = styled.View`
  margin-top: 20px;
`;

export const FloatButton = styled.TouchableOpacity`
  background-color: red;
  margin-right: 10px;
  width: 70px;
  height: 70px;
  border-width: 2px;
  border-color: red;
  border-radius: 50px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
`;
