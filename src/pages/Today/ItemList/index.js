import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ContainerItem, ItemTexts, Text} from './styles';

export default function ItemList({index, onPress, item}) {
  return (
    <ContainerItem onPress={() => alert(JSON.stringify(item))}>
      <ItemTexts>
        <Text size="20px" color="black">
          {item.task}
        </Text>
        <Text size="16px" color="gray">
          {item.date}
        </Text>
        <Text size="16px" color="gray">
          {item.hour}
        </Text>
      </ItemTexts>
      <Icon
        size={35}
        onPress={() => onPress(index)}
        name={item.check ? 'check-box' : 'check-box-outline-blank'}
        color="red"
      />
    </ContainerItem>
  );
}
