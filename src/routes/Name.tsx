import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import Button from '../styles/components/Button';

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

    // messaging().subscribeToTopic('topic');
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0C0C0D" />

      <S.Container>
        <S.ContainerWrapper>
          <S.H1>This page is for:</S.H1>
          <S.Padding />

          <S.H3>{name}</S.H3>
          <View>
            <S.Padding />
            <Button title="Notification" onPress={notification} />
          </View>
        </S.ContainerWrapper>
      </S.Container>
    </>
  );
};

export default Name;
