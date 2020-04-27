import React, { useState } from 'react';
import { Container, Logo, Text, Input, Button, Form } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [valueUser, setValueUser] = useState('');
  const [valuePass, setValuePass] = useState('');

  async function handleButtonEnter() {
    if (verifyValues()) {
      await AsyncStorage.setItem('@user', valueUser);
      navigation.navigate('Home');
    }
  }

  function verifyValues() {
    if (valueUser === '' || valuePass === '') {
      alert('É necessario preencher os campos!');
      return false;
    }

    if (valuePass.length < 6) {
      alert('O tamanho minimo de digitos é 6 caracteres');
      return false;
    }

    if (valuePass !== '123456') {
      alert('Senha incorretar');
      return false;
    }

    return true;
  }

  return (
    <Container>
      <Logo source={logo} />
      <Text size="40px" bold={true} style={{ marginTop: 30, marginBottom: 30 }}>
        MyTodoList
      </Text>
      <Form>
        <Input
          placeholder="Usuario"
          value={valueUser}
          onChangeText={(text) => setValueUser(text)}
        />
        <Input
          placeholder="Senha"
          security={true}
          value={valuePass}
          onChangeText={(text) => setValuePass(text)}
        />
        <Button onPress={handleButtonEnter}>
          <Text size="20px" bold={true}>
            Entrar
          </Text>
        </Button>
      </Form>
    </Container>
  );
}
