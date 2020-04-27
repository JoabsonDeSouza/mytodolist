import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { formatDate } from '../../util/formatDate';
import ItemList from './ItemList';

import { FlatList } from 'react-native';
import {
  Container,
  ContainerChild,
  Text,
  Avatar,
  Header,
  ContainerTexts,
  ProgressBar,
  Progress,
  ContainerList,
  ContainerItem,
  FloatButton,
  ItemTexts,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Today({ route, navigation }) {
  const [progress, setProgress] = useState(0);
  const [listTasks, setListTasks] = useState([]);
  const [user, setUser] = useState('');

  const today = formatDate(new Date());

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

  getData = async () => {
    try {
      const responseUser = await AsyncStorage.getItem('@user');
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        const list = JSON.parse(value);
        calculateProgress(list);

        setListTasks(list);
      }

      if (responseUser) {
        setUser(responseUser);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  async function handleCheck(index) {
    const list = listTasks.map((task, position) => {
      if (position === index) {
        task.check = !task.check;
      }
      return task;
    });

    calculateProgress(list);

    await AsyncStorage.setItem('@storage_Key', JSON.stringify(list));
    setListTasks(list);
  }

  function calculateProgress(list) {
    const listCheck = list.filter((task) => task.check);

    const totalProgress = (listCheck.length * 100) / list.length;
    setProgress(totalProgress.toFixed(2));
  }

  return (
    <Container>
      <ContainerChild>
        <Header>
          <ContainerTexts>
            <Text size="20px" bold={true}>{`Olá, ${user}`}</Text>
            <Text>{today.toString().split(' ')[0]}</Text>
          </ContainerTexts>
          <Avatar
            source={{
              uri:
                'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-10-512.png',
            }}
          />
        </Header>
        <ProgressBar>
          <Progress progress={`${progress}%`} />
          <Text size="10px" color={'black'}>
            {`${progress}%`}
          </Text>
        </ProgressBar>
        <ContainerList>
          {listTasks.length === 0 ? (
            <Text>Nenhuma Tarefa encontrada</Text>
          ) : (
              <FlatList
                style={{ width: '100%' }}
                data={listTasks}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item, index }) => (
                  <ItemList item={item} onPress={handleCheck} index={index} />
                )}
              />
            )}
        </ContainerList>
        <FloatButton onPress={() => navigation.navigate('Details')}>
          <Icon size={50} name={'add'} color="white" />
        </FloatButton>
      </ContainerChild>
    </Container>
  );
}
