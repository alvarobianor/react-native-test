import React from 'react';
import {Text, Button} from 'react-native';
import * as S from '../styles/style';
import api from '../api';

const Name = ({route}: any) => {
  const {name} = route.params;

  const notification = async () => {
    const resp = await api.post('/store', {name});
    console.log(resp);
  };

  return (
    <S.Container>
      <Text>{name}</Text>
      <Button title="Notification" onPress={notification} />
    </S.Container>
  );
};

export default Name;
