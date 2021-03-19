import React, {useEffect, useState} from 'react';
import {Text, Button} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import * as S from '../styles/style';
import api from '../api';

const Name = ({route}: any) => {
  const {name} = route.params;

  const [token, setToken] = useState<string>('');
  const notification = async () => {
    const resp = await api.post('/store', {name, token});
    console.log(resp);
  };

  useEffect(() => {
    messaging()
      .getToken()
      .then((token) => {
        setToken(token);
        console.log('tokeeen', token);
      });
  }, []);

  return (
    <S.Container>
      <Text>{name}</Text>
      <Button title="Notification" onPress={notification} />
    </S.Container>
  );
};

export default Name;
