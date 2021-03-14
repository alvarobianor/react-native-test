import React from 'react';
import {Text, Button} from 'react-native';
import * as S from '../styles/style';

const Name = ({route}: any) => {
  const {name} = route.params;

  const notification = async () => {};

  return (
    <S.Container>
      <Text>{name}</Text>
      <Button title="Notification" onPress={notification} />
    </S.Container>
  );
};

export default Name;
