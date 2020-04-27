import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import logo from '../../assets/logo.png';
import { Container, Title, Logo } from './styles';

export default function Splash({ navigation }) {
  navigateToLogin = async () => {
    try {
      const response = await AsyncStorage.getItem('@user');
      if (response === null) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Home');
      }
    } catch (e) {
      console.warn(e);
    }
  };

  setTimeout(() => {
    navigateToLogin();
  }, 3000);

  return (
    <Container>
      <Logo source={logo} />
      <Title size="40px" color="red" bold={true}>
        MyTodoList
      </Title>
      <Title>Meu app de tarefas diarias</Title>
    </Container>
  );
}
