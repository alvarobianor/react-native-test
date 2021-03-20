import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding-top: 20%;
  padding-bottom: 20%;
  background-color: 'rgba(12, 12, 13, 1)';
  /* background-color: #fff; */
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled(ScrollView)`
  height: 100%;
`;

export const Padding = styled.View`
  height: ${(props: {size: any}) => props.size || 30}px;
`;

export const ContainerWrapper = styled.View`
  margin-bottom: 20px;

  background-color: #0f2619;
  width: 80%;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
`;

export const MiniContainer = styled.View`
  margin-bottom: 20px;
  background-color: #0f2619;
  flex-direction: row;
  width: 80%;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
`;

export const H1 = styled.Text`
  font-size: 50px;
  text-align: center;
  color: white;
`;
export const H3 = styled.Text`
  font-size: 28px;
  color: white;
`;

export const ButtonDetails = styled.View`
  margin-top: 20px;
`;

export const But = styled.Button`
  margin-top: 20px;
  background-color: tomato;
`;
