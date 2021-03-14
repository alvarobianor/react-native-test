/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import * as S from '../styles/style';
import api from '../api';

const Names = ({navigation}: any) => {
  const [names, setNames] = useState<String[]>([]);

  const getNames = async () => {
    console.log('loading...');
    const {data} = await api.get('/adm');

    const namesData = data.map((e: any) => e.name);

    setNames(namesData);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <S.Container>
      {names.map((name, i) => {
        return (
          <S.MiniContainer key={i}>
            <Text>{name}</Text>
            <Button
              title="Go to Details"
              onPress={() =>
                navigation.navigate('Nome', {
                  name,
                })
              }
            />
          </S.MiniContainer>
        );
      })}
    </S.Container>
  );
};

export default Names;
