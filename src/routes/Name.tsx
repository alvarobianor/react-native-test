import React from 'react';
import {Text, Button} from 'react-native';
import * as S from '../styles/style';

// import { Container } from './styles';
import axios from 'axios';
const Name = ({route}: any) => {
  const api = axios.create();
  const {name} = route.params;

  const notification = async () => {
    const data = await api.post(
      'https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send',
      {
        message: {
          token: 'bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...',
          data: {},
          notification: {
            body: `This is a ${name} notification message!`,
            title: `${name} Message`,
          },
        },
      },
      {
        headers: {
          'Content-Type': ' application/json',
          Authorization:
            'Bearer AAAAzb42Iro: APA91bHtlNI7hgJEsG78UchL3TH1vfirgMF9ueFscqcho2esspk3Qu3wfH31SCmJT9HV3fpwsS4SlX_LFsr_xaL4_GoyBWIhFxLdh3PVmDONQ9AKYoNJlg7NQTD_Xxf-l6plXayPF6hJ',
        },
      },
    );
    console.log(data);
  };

  return (
    <S.Container>
      <Text>{name}</Text>
      <Button title="Notification" onPress={notification} />
    </S.Container>
  );
};

export default Name;
