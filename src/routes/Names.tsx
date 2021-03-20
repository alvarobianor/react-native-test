/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState, useCallback} from 'react';
import {ScrollView, Text, Linking, StatusBar} from 'react-native';
import Button from '../styles/components/Button';
import * as S from '../styles/style';
import api from '../api';

const Names = ({navigation, route}: any) => {
  const [names, setNames] = useState<String[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getNames = async () => {
    try {
      const patch = await Linking.getInitialURL();

      if (patch !== null || patch !== undefined) {
        const [, name] = patch?.split('Nome?') as string[];
        navigation.navigate('Nome', {
          name,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      const {data} = await api.get('/adm');

      const namesData = data.map((e: any) => e.name);
      setLoading(false);
      setNames(namesData);
    }
  };
  useEffect(() => {
    getNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0C0C0D" />
      {loading && (
        <S.Container>
          <S.MiniContainer>
            <Text>Loading...</Text>
          </S.MiniContainer>
        </S.Container>
      )}
      <S.Scroll>
        <S.Container>
          {!loading &&
            names &&
            names.map((name, i) => {
              return (
                <S.MiniContainer key={i}>
                  <S.H3>{name}</S.H3>
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
      </S.Scroll>
    </>
  );
};

export default Names;
