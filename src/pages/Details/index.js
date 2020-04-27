import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-community/async-storage';

import { formatDate } from '../../util/formatDate';

import {
  Container,
  Text,
  Input,
  Button,
  ContainerDate,
  ContainerItemDate,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Details() {
  const [task, setTask] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showDate, setShowDate] = useState('');
  const [showTime, setShowTimer] = useState('');
  const [typeModal, setTypeModal] = useState('date');

  const showDatePicker = () => {
    setTypeModal('date');
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTypeModal('time');
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dateFormated = formatDate(date);
    const onlyDate = dateFormated.split(' ')[0];
    const onlyTime = dateFormated.split(' ')[1];

    if (typeModal === 'date') {
      setShowDate(onlyDate);
    }

    if (typeModal === 'time') {
      setShowTimer(onlyTime);
    }

    hideDatePicker();
  };

  async function handleSaveTask() {
    //AsyncStorage.clear();
    const data = {
      task,
      date: showDate,
      hour: showTime,
      check: false,
    };

    if (task === '') {
      alert('Preencha o campo tarefa');
      return;
    }

    if (showDate === '') {
      alert('Selecione uma data');
      return;
    }

    if (showTime === '') {
      alert('Selecione um horario');
      return;
    }

    try {
      const list = await AsyncStorage.getItem('@storage_Key');
      if (list !== null) {
        const newList = JSON.parse(list);
        await AsyncStorage.setItem(
          '@storage_Key',
          JSON.stringify([...newList, data]),
        );
      } else {
        await AsyncStorage.setItem('@storage_Key', JSON.stringify([data]));
      }
      alert('Tarefa criada com sucesso!');
    } catch (e) {
      console.warn(e);
    }

    setTask('');
    setShowDate('');
    setShowTimer('');
  }

  return (
    <Container>
      <Input value={task} onChangeText={(text) => setTask(text)} />
      <ContainerDate>
        <ContainerItemDate onPress={showDatePicker}>
          <Text>Selecione a data</Text>
          <Icon
            style={{ marginLeft: 10 }}
            size={35}
            name={'date-range'}
            color="red"
          />
        </ContainerItemDate>
        <Text>{showDate}</Text>
        <ContainerItemDate onPress={showTimePicker}>
          <Text>Selecione a hora</Text>
          <Icon
            style={{ marginLeft: 10 }}
            size={35}
            name={'access-time'}
            color="red"
          />
        </ContainerItemDate>
        <Text>{showTime}</Text>
      </ContainerDate>
      <Button onPress={() => handleSaveTask()}>
        <Text>CRIAR TAREFA</Text>
      </Button>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={typeModal}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
}
